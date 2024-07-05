import { useEffect, useRef } from 'react';

function useIntersectionObserver(animationType = 'fade', options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show', `animate-${animationType}`);
        } else {
          // NOTE: uncomment to make animations repeat when coming into view again. leave out to only animate once.
          // entry.target.classList.remove('show', `animate-${animationType}`);
        }
      });
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animationType, options]);

  return ref;
}

export default useIntersectionObserver;