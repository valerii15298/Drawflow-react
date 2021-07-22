import { useCallback, useRef, useState } from "react";

const useLongPress = (
  onLongPressStart: any,
  onLongPressEnd: any,
  onClick: any,
  delay = 300
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
    onMouseDown: (e: MouseEvent) => start(e),
    onTouchStart: (e: TouchEvent) => start(e),
    onMouseUp: (e: MouseEvent) => clear(e),
    onTouchEnd: (e: TouchEvent) => clear(e),
  };
};
export default useLongPress;