import { useEffect, useRef } from 'react';
import { CursorEffectWrapper } from './CursorEffectWrapper';

export const ToTop = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollHandle = () => {
      if (!ref.current) return;
      ref.current.style.display = window.scrollY >= 650 ? 'block' : 'none';
    };

    window.addEventListener('scroll', scrollHandle);

    return () => window.removeEventListener('scroll', scrollHandle);
  }, []);

  return (
    <CursorEffectWrapper
      className="hidden md:block"
      cursorType="link"
      onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}
    >
      <div className="totop group select-none" ref={ref}>
        <span className="absolute bottom-3 left-0 right-0 text-center text-3xl font-bold text-transparent transition-all duration-300 group-hover:text-current">
          Top
        </span>
      </div>
    </CursorEffectWrapper>
  );
};
