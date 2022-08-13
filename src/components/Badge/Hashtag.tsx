import { CursorEffectWrapper } from '@cpns/shared';
import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';
import c from 'classnames';
import { hashTagStyles } from '@lib/theme';

interface HashtagProps {
  href?: string;
  tag?: string;
}

export const Hashtag: FC<HashtagProps & PropsWithChildren> = ({ children, href, tag }) => {
  return (
    <CursorEffectWrapper cursorType="link">
      <Link href={href || '/hashtags'}>
        <a
          className={c(
            'm-2 select-none rounded-md p-2 px-4 font-semibold',
            hashTagStyles[tag]?.bg,
            hashTagStyles[tag]?.color
          )}
        >
          # {children}
        </a>
      </Link>
    </CursorEffectWrapper>
  );
};
