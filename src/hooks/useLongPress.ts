import { useCallback, useRef, useState, MouseEvent } from "react";

const useLongPress = (
  onLongPressStart: (e?: MouseEvent) => void = () => null,
  onLongPressEnd: (e?: MouseEvent) => void = () => null,
  onClick: (e?: MouseEvent) => void = () => null,
  delay: number = 300
) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const start = useCallback(
    (event) => {
      timeout.current = setTimeout(() => {
        setLongPressTriggered(true);
        onLongPressStart(event);
      }, delay);
    },
    [onLongPressStart, delay]
  );

  const clear = useCallback(
    (event) => {
      timeout.current && clearTimeout(timeout.current);
      longPressTriggered ? onLongPressEnd(event) : onClick(event);
      setLongPressTriggered(false);
    },
    [onClick, longPressTriggered, onLongPressEnd]
  );

  return {
    onMouseDown: (e: any) => start(e),
    onTouchStart: (e: any) => start(e),
    onMouseUp: (e: any) => clear(e),
    onTouchEnd: (e: any) => clear(e),
  };
};
export default useLongPress;
