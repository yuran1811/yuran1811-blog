import { BASE_URL, DivProps } from '@/shared';
import { EnvelopeIcon, FacebookIcon } from '@cpns/icons';
import c from 'classnames';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface PostShareProps {
  title: string;
}

const sources: {
  name: string;
  Icon: any;
  link: (url: string, title: string) => string;
}[] = [
  {
    name: 'Facebook',
    Icon: FacebookIcon,
    link: (url, title) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&t=${title}`,
  },
  {
    name: '',
    Icon: EnvelopeIcon,
    link: (url, title) => `mailto:?subject=${encodeURIComponent(title)}&body=${url}`,
  },
];

const PostShare: FC<PostShareProps & Pick<DivProps, 'className'>> = ({ title, className }) => {
  const router = useRouter();

  return (
    <div className={c(className, 'flexcenter my-3 flex-wrap gap-2 text-5xl')}>
      {sources.map(({ Icon, link, name }) => (
        <a key={name} href={link(`${BASE_URL}${router.asPath}`, title)} target="_blank" rel="noopener noreferrer">
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default PostShare;
