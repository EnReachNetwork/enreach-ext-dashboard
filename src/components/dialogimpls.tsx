import { SVGS } from "@/svg";
import { IoDesktopOutline } from "react-icons/io5";
import { useToggle } from "react-use";
import { Btn } from "./btns";
import { TitModal } from "./dialogs";
import { ReactNode } from "react";
import { EXT_ID } from "@/lib/env";

export function AddNodeDialog() {
  const [isOpen, toggleOpen] = useToggle(false);
  return (
    <>
      <Btn className="h-8" onClick={() => toggleOpen()}>Add New Node</Btn>
      <TitModal isOpen={isOpen} onClose={() => toggleOpen(false)} tit="Add New Node">
        <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
          <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
            <SVGS.SvgExt className="text-[3.75rem]" />
            <p className="self-stretch flex-grow-0 flex-shrink-0 text-sm text-center text-white">
              <span className="self-stretch flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-white">Chrome Extension Node</span>
              <br />
              <span className="self-stretch flex-grow-0 flex-shrink-0 text-sm text-center text-[#CBCBCB] font-AlbertSans">
                The super light-weight node that helps EnReach Network to gain perception to the network’s capability and potential to serve the network
              </span>
            </p>
          </div>
          <Btn className="w-full" onClick={() => window.open(`https://chromewebstore.google.com/detail/${EXT_ID}`, "_blank")}>
            Download
          </Btn>
        </div>
        <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
          <IoDesktopOutline className="text-[3.75rem] text-white" />
          <p className="self-stretch flex-grow-0 flex-shrink-0  text-sm text-center  opacity-40">
            <span className="self-stretch flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-white">Edge Node (Coming Soon)</span>
            <br />
            <span className="self-stretch flex-grow-0 flex-shrink-0 text-sm text-center text-[#CBCBCB] font-AlbertSans">
              The working nodes at edge side
              that provides qualified edge cloud capabilities
            </span>
          </p>
        </div>
      </TitModal>
    </>
  );
}

export function ConfirmDialog({
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  cancelColor = 'primary',
  onCancel,
  onConfirm,
  tit,
  msg,
  isOpen,
  className,

}: {
  confirmText?: string | ReactNode;
  cancelText?: string | ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  tit: string;
  msg: ReactNode;
  isOpen: boolean;
  className?: string;
  cancelColor?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined
}) {
  return (
    <TitModal className={className} isOpen={isOpen} tit={tit} onClose={onCancel}>
      <div className="flex flex-col gap-6 w-full">
        <div className="text-center text-sm whitespace-pre-wrap font-AlbertSans">{msg}</div>
        <div className="grid grid-cols-2 gap-2.5">
          {confirmText &&
            <Btn className="h-10" color="default" onClick={onConfirm}>
              {confirmText}
            </Btn>
          }
          {cancelText &&
            <Btn className="h-10" color={cancelColor} onClick={onCancel}>
              {cancelText}
            </Btn>
          }
        </div>
      </div>
    </TitModal>
  );
}
