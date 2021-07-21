import { RefObject, useCallback, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handleClickOutside: (event: MouseEvent) => void,
  disabled?: boolean
) => {
  const handleClick = useCallback(
    (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClickOutside(event);
      }
    },
    [ref, handleClickOutside]
  );

  useEffect(() => {
    const removeListener = () =>
      document.removeEventListener("mousedown", handleClick);
    if (disabled) {
      removeListener();
      return;
    }
    document.addEventListener("mousedown", handleClick);
    return removeListener;
  }, [handleClick, disabled]);
};