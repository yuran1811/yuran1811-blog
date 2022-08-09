import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';

interface HashtagProps {
  href?: string;
}

export const Hashtag: FC<HashtagProps & PropsWithChildren> = ({ children, href }) => {
  return (
    <Link href={href || '#'}>
      <a className="underline-offset-4 hover:underline"># {children}</a>
    </Link>
  );
};
