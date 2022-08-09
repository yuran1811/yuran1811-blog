import { urlForImage } from '@utils/sanity';
import c from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface CoverImageProps {
  title: string;
  slug?: string | null;
  image: string;
}

export const CoverImage: FC<CoverImageProps> = ({ title, slug, image: source }) => {
  const image = source ? (
    <div className={c('shadow-lg')}>
      <Image
        layout="responsive"
        width={2000}
        height={1000}
        className="z-[-1]"
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
