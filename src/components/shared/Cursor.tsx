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
    const updateMouse = () => {
      requestAnimationFrame(updateMouse);

      displayedMouse.current.x += (realMouse.current.x - displayedMouse.current.x) * 0.08;
      displayedMouse.current.y += (realMouse.current.y - displayedMouse.current.y) * 0.08;

      if (ringRef.current) {
        ringRef.current.style.left = `${displayedMouse.current.x}px`;
        ringRef.current.style.top = `${displayedMouse.current.y}px`;
      }
    };

    setCurrentCursor(cursorRef.current);
    updateMouse();

    window.addEventListener('mousemove', mouseMoveHandle);
    window.addEventListener('mousedown', () => cursorRef.current?.setAttribute('cursor-status', 'click'));
    window.addEventListener('mouseup', () => cursorRef.current?.setAttribute('cursor-status', ''));
  }, []);

  return (
    <div ref={cursorRef} className="hidden md:block" cursor-type="" cursor-status="">
      <div ref={ringRef} className="cursor-ele" />
      <div ref={dotRef} className="cursor-ele" />
    </div>
  );
};
