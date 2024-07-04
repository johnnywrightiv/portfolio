import React, { useEffect, useRef } from 'react';

export const CursorAnimation = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handlePointerMove = (e) => {
      const { clientX, clientY } = e;

      if (cursorRef.current) {
        cursorRef.current.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 3000, fill: "forwards" })
      }
    };

    document.addEventListener('pointermove', handlePointerMove);

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div id="cursor" ref={cursorRef}></div>
  )
};