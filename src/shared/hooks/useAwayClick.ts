import {RefObject, useEffect} from "react";

export const useAwayClick = (ref: RefObject<HTMLElement>, onClick: () => void) => {
  useEffect(() => {
    const handleClickAway = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClick();
      }
    };

    document.addEventListener('mousedown', handleClickAway);

    return () => {
      document.removeEventListener('mousedown', handleClickAway);
    };
  }, [ref, onClick])
};