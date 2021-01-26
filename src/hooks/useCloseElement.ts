import { RefObject } from "react";
import { useEffect, useState } from "react";

export function useCloseElement(ref:RefObject<HTMLDivElement>,state:boolean, onClose: ()=> void):boolean {
  
  const [isClose, setIsClose] = useState(state)
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        setIsClose(true)
        onClose?.()
      }
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isClose, onClose, ref]);
  return isClose
}
