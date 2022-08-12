import { DivProps } from '@shared/types';
import { urlForImage } from '@utils/sanity';
import c from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type CoverImageProps = {
  title: string;
  slug?: string | null;
  image: string;
  isPriority?: boolean;
} & Pick<DivProps, 'className'>;

export const CoverImage: FC<CoverImageProps> = ({ className, title, slug, image: source, isPriority }) => {
  const image = source ? (
    <div className={c('shadow-lg', className)}>
      <Image
        priority={!!isPriority}
        layout="responsive"
        width={2000}
        height={1000}
        className="z-[-1] select-none"
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(1000).width(2000).url()}
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};
