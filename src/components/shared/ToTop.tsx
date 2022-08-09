import { useEffect, useRef } from 'react';

export const ToTop = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!ref.current) return;
      ref.current.style.display = window.scrollY >= 650 ? 'block' : 'none';
    });
  }, []);

  return (
    <div className="totop group" ref={ref}>
      <span
        className="absolute bottom-3 left-0 right-0 text-center text-3xl font-bold text-transparent transition-all duration-300 group-hover:text-current"
        onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}
      >
        Top
      </span>
    </div>
  );
};
