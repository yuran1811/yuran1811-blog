import { useStore } from '@/store';
import { FC, useEffect, useState } from 'react';

export const ScrollProgress: FC = () => {
  const targetRef = useStore((s) => s.progressBar);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const scrollHandle = () => {
      if (!targetRef) return;
      setProgress(Math.floor((100 * (window.scrollY - targetRef.offsetTop + 100)) / targetRef.offsetHeight));
    };

    window.addEventListener('scroll', scrollHandle);

    return () => window.removeEventListener('scroll', scrollHandle);
  }, [targetRef]);

  return (
    <div
      className="absolute left-0 bottom-0 right-0 h-1 w-full bg-[#f2da87] dark:bg-[#816c1d]"
      style={{ display: progress <= 0 || progress > 100 ? 'none' : 'block' }}
    >
      <div className="z-10 h-full w-0 rounded-md bg-[#816c1d] dark:bg-[#f2da87]" style={{ width: `${progress}%` }} />
    </div>
  );
};
