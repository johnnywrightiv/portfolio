import { useEffect, useRef } from 'react'

export const CursorAnimation = () => {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    // Set initial position to center of the screen
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    cursor.style.left = `${centerX}px`
    cursor.style.top = `${centerY}px`

    const handlePointerMove = (e) => {
      const { clientX, clientY } = e

      cursor.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 7000, fill: 'forwards' }
      )
    }

    document.addEventListener('pointermove', handlePointerMove)

    return () => {
      document.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  return <div id="cursor" ref={cursorRef}></div>
}