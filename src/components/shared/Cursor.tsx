import { useStore } from '@/store';
import { useEffect, useRef } from 'react';

export const Cursor = () => {
  const setCurrentCursor = useStore((s) => s.setCurrentCursor);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const isFirstMove = useRef(false);
  const realMouse = useRef({ x: -100, y: -100 });
  const displayedMouse = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const mouseMoveHandle = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }

      if (ringRef.current) {
        if (isFirstMove.current) {
          ringRef.current.style.display = 'block';
          displayedMouse.current.x = e.clientX;
          displayedMouse.current.y = e.clientY;
          isFirstMove.current = false;
        }

        realMouse.current.x = e.clientX;
        realMouse.current.y = e.clientY;
      }
    };
    const mouseDownHandle = () => cursorRef.current?.setAttribute('cursor-status', 'click');
    const mouseUpHandle = () => cursorRef.current?.setAttribute('cursor-status', '');
    const updateMouse = () => {
      requestAnimationFrame(updateMouse);

      displayedMouse.current.x += (realMouse.current.x - displayedMouse.current.x) * 0.065;
      displayedMouse.current.y += (realMouse.current.y - displayedMouse.current.y) * 0.065;

      if (ringRef.current) {
        ringRef.current.style.left = `${displayedMouse.current.x}px`;
        ringRef.current.style.top = `${displayedMouse.current.y}px`;
      }
    };

    setCurrentCursor(cursorRef.current);
    updateMouse();

    window.addEventListener('mousemove', mouseMoveHandle);
    window.addEventListener('mousedown', mouseDownHandle);
    window.addEventListener('mouseup', mouseUpHandle);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandle);
      window.removeEventListener('mousedown', mouseDownHandle);
      window.removeEventListener('mouseup', mouseUpHandle);
    };
  }, []);

  return (
    <div ref={cursorRef} className="hidden md:block" cursor-type="" cursor-status="">
      <div ref={ringRef} className="cursor-ele" />
      <div ref={dotRef} className="cursor-ele" />
    </div>
  );
};
