import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export function useShowParamsError() {
  const sp = useSearchParams();
  const error = sp.get("error");
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);
}
