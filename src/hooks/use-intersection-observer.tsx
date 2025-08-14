
"use client";

import { useState, useEffect, RefObject } from 'react';

export const useIntersectionObserver = (
  ref: RefObject<Element> | React.ForwardedRef<HTMLDivElement>,
  options: IntersectionObserverInit = {}
) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof ref === 'function' || !ref?.current) {
        return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        ...options,
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return inView;
};
