import { useStore } from '@/store';
import { ArrowDownIcon, ArrowUpIcon } from '@cpns/icons/Arrow';
import c from 'classnames';
import { useEffect, useRef, useState } from 'react';

type EventHandlerFuncType = (e: string, listener: EventListenerOrEventListenerObject) => void;

const addEvent: EventHandlerFuncType = (e, listener) => window.addEventListener(e, listener);
const removeEvent: EventHandlerFuncType = (e, listener) => window.removeEventListener(e, listener);

export const Cursor = () => {
  const setCurrentCursor = useStore((s) => s.setCurrentCursor);

  const [isMoving, setMoving] = useState(false);
  const [isClicking, setClicking] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const moveTimeout = useRef(null);
  const isFirstMove = useRef(false);
  const realMouse = useRef({ x: -100, y: -100 });
  const displayedMouse = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const mouseMoveHandle = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;

      setMoving(true);

      clearTimeout(moveTimeout.current);
      moveTimeout.current = setTimeout(() => setMoving(false), 1000);

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
    const mouseDownHandle = () => {
      setClicking(true);
      cursorRef.current?.setAttribute('cursor-status', 'click');
    };
    const mouseUpHandle = () => {
      setClicking(false);
      cursorRef.current?.setAttribute('cursor-status', '');
    };

    const updateMouse = () => {
      requestAnimationFrame(updateMouse);

      displayedMouse.current.x += (realMouse.current.x - displayedMouse.current.x) * 0.07;
      displayedMouse.current.y += (realMouse.current.y - displayedMouse.current.y) * 0.07;

      if (ringRef.current) {
        ringRef.current.style.left = `${displayedMouse.current.x}px`;
        ringRef.current.style.top = `${displayedMouse.current.y}px`;
      }
    };

    setCurrentCursor(cursorRef.current);
    updateMouse();

    addEvent('mousemove', mouseMoveHandle);
    addEvent('mousedown', mouseDownHandle);
    addEvent('mouseup', mouseUpHandle);

    return () => {
      removeEvent('mousemove', mouseMoveHandle);
      removeEvent('mousedown', mouseDownHandle);
      removeEvent('mouseup', mouseUpHandle);
    };
  }, []);

  return (
    <div ref={cursorRef} className="hidden md:block" cursor-type="" cursor-status="">
      <div ref={ringRef} className="cursor-ele flexcenter">
        <div
          className={c('flex flex-col items-center justify-between text-4xl transition-opacity', {
            'opacity-0': isMoving || isClicking,
          })}
        >
          <ArrowUpIcon className="animate-bounceUp -mt-20 block" />
          <ArrowDownIcon className="animate-bounceDown -mb-20 block" />
        </div>
      </div>
      <div ref={dotRef} className="cursor-ele" />
    </div>
  );
};
