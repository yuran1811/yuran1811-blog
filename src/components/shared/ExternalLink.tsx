import { AnchorProps } from '@shared/types';
import { FC, PropsWithChildren } from 'react';

export const ExternalLink: FC<PropsWithChildren & AnchorProps> = ({ children, href }) => (
  <a href={href || '/'} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);
