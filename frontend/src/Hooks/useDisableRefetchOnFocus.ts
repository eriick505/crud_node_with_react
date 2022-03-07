import { useEffect } from "react";
import { focusManager } from "react-query";

export function useDisableRefetchOnFocus() {
  useEffect(() => {
    focusManager.setFocused(false);

    return () => focusManager.setFocused(undefined);
  }, []);
}
