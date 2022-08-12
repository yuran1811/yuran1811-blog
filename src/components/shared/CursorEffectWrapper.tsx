import { useStore } from '@/store';
import { DivProps } from '@shared/types';
import { FC, PropsWithChildren } from 'react';

interface CursorEffectWrapperProps {
  cursorType?: 'link' | 'wrapper' | 'default';
  cursorStatus?: 'click';
}

export const CursorEffectWrapper: FC<CursorEffectWrapperProps & PropsWithChildren & DivProps> = ({
  children,
  cursorStatus,
  cursorType,
  ...otherProps
}) => {
  const currentCursor = useStore((s) => s.currentCursor);

  const onMouseOver = (e: any) => {
    e.stopPropagation();
    currentCursor?.setAttribute('cursor-type', cursorType || '');
    currentCursor?.setAttribute('cursor-status', cursorStatus || '');
  };
  const onMouseLeave = (e: any) => {
    e.stopPropagation();
    currentCursor?.setAttribute('cursor-type', '');
    currentCursor?.setAttribute('cursor-status', '');
  };

  return (
    <div {...otherProps} onMouseLeave={onMouseLeave} onMouseOver={onMouseOver} onMouseOut={onMouseLeave}>
      {children}
    </div>
  );
};
