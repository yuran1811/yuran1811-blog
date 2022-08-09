import { useStore } from '@/store';
import { FC, PropsWithChildren } from 'react';

interface CursorEffectWrapperProps {
  cursorType?: string;
  cursorStatus?: string;
}

export const CursorEffectWrapper: FC<CursorEffectWrapperProps & PropsWithChildren> = ({
  children,
  cursorStatus,
  cursorType,
}) => {
  const currentCursor = useStore((s) => s.currentCursor);

  const onMouseOver = () => {
    currentCursor?.setAttribute('cursor-type', cursorType);
    currentCursor?.setAttribute('cursor-status', cursorStatus);
  };
  const onMouseLeave = () => {
    currentCursor?.setAttribute('cursor-type', '');
    currentCursor?.setAttribute('cursor-status', '');
  };

  return (
    <div onMouseLeave={onMouseLeave} onMouseOver={onMouseOver}>
      {children}
    </div>
  );
};
