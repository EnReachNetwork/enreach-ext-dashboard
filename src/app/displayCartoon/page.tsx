"use client";

import ACommonCartoonList from "@/components/ACommonCartoonList";
import ADisplayHeader from "@/components/ADisplayHeader";
import { TapData } from "@/components/aibum";
import { HelpTip } from "@/components/tips";
import { useCartoonList } from "@/hooks/useCartoonList";
import { useCopy } from "@/hooks/useCopy";
import backendApi from "@/lib/api";
import { SVGS } from "@/svg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { useSetState } from "react-use";
import { toast } from "sonner";
import { useAuthContext } from "../context/AuthContext";
import { sleep } from "@/lib/utils";


const DispalyCartoon = () => {
  const ac = useAuthContext();
  const user = ac.queryUserInfo?.data;
  const r = useRouter()
  const params = new URLSearchParams(window.location.search);
  const uid = params.get("uid") || ''
  const name = params.get("name") || ''
  const username = name?.split('@')[0] || ''
  const [liked, setLiked] = useState<boolean>(false)
  const [data, setData] = useSetState<{ data?: TapData, loading?: boolean, }>({ data: { like: 0, list: [] }, loading: true })
  const copy = useCopy();

  const shareLink = `${origin}/displayCartoon?referral=${user?.inviteCode}&uid=${user?.id}&name=${user?.email}`;

  const onShareToX = () => {
    const text = `
I have a new 🫐Berry Buddy! 

Click this link to visit my EnReach Season 1 Album give me a Like💗.

Join EnReach Season 1 and earn BERRY points by running a super lite node in Chrome Extension.

`;
    const postXUrl = `https://x.com/intent/post?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareLink)}`;
    window.open(postXUrl, "_blank");
  };

  const gerCartoonList = async () => {
    const params = new URLSearchParams(window.location.search);
    const uid = params.get("uid") || ''
    try {
      if (uid) {
        if (ac.user?.userId && uid) {
          const likedRes = await backendApi.userIsLiked(uid)
          setLiked(likedRes.liked)
        }
        const sharedList = await backendApi.getShareUserList(uid)
        setData({ data: sharedList, loading: false })
      }
    } catch (error) {
      setData({ loading: false })
      console.error("Error fetching data:", error);
    }

  }


  useEffect(() => {
    gerCartoonList()
  }, [])

  let clicked = false
  const onLike = async () => {
    if (clicked) return
    clicked = true
    if (user?.id === uid) {
      return
    } else if (!user?.id) {
      const params = new URLSearchParams(window.location.search);
      const referral = params.get("referral");
      const uid = params.get("uid");
      const name = params.get("name");
      r.push(`signin/?page=displayCartoon&referral=${referral}&uid=${uid}&name=${name}`)
      return
    } else if (liked) {
      toast.success("You have liked this album.");
      clicked = false
      return
    }

    backendApi.currentUserLike('like', uid).then((res) => {
      if (res.message === 'success') {
        gerCartoonList()
      }
    }).catch((e) => {
      toast.error(`You need to update to Teen Berry (Lv.2 User) to unlock 'Like'.`);

    }).finally(() => {
      clicked = false
    })
  }

  const cartoonList = useCartoonList(data.data)

  return (
    <>
      <ADisplayHeader />
      <div className="  mx-[6.5rem] xsl:mx-[3.75rem]">
        <div className=" flex justify-between ">
          <div className="my-10 font-semibold text-xl leading-10">{`${(uid === user?.id ? 'My Berry Album' : username && (username + '‘s Berry Album') || '')} `}</div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className={`${uid === user?.id && 'cursor-not-allowed'}`} onClick={onLike}>
                {liked || uid === user?.id && data.data?.like ?
                  <SVGS.SvgLiked /> :
                  <SVGS.SvgLike />
                }
              </button>
              <span className="text-xl ">
                {data.data?.like}
              </span>
            </div>
            {user?.id === uid &&
              <>
                <HelpTip content={'Copy Album Link'}>
                  <button className="text-2xl  hover:text-[#4281FF]" onClick={() => copy(shareLink)}>
                    <IoShareSocialSharp />
                  </button>
                </HelpTip>
                <HelpTip content={'Share to Twitter'}>
                  <button onClick={onShareToX} className="text-2xl hover:text-[#4281FF]">
                    <FaXTwitter />
                  </button>
                </HelpTip>
              </>
            }
          </div>
        </div>
        <ACommonCartoonList cartoonList={cartoonList} loading={data.loading} />
      </div>
    </>

  );
}


export default DispalyCartoon
