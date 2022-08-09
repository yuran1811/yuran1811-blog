import { DivProps } from '@/shared';
import c from 'classnames';
import { FC } from 'react';

interface OverlayProps {
  zIdx?: string;
  background?: string;
}

export const Overlay: FC<OverlayProps & DivProps> = ({ className, zIdx, background, ...otherProps }) => (
  <div
    {...otherProps}
    className={c(
      className,
      'fullscreen cursor-pointer',
      zIdx || 'z-10',
      background || 'bg-white/90 dark:bg-[#121212]/90'
    )}
  />
);
