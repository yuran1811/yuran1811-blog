import { BackIcon } from '@cpns/icons/BackIcon';
import { Avatar, CoverImage, Date } from '@cpns/shared';
import { useRouter } from 'next/router';
import PostTitle from './PostTitle';

interface PostHeaderProps {
  title: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    picture: string;
  };
}

const PostHeader = ({ title, coverImage, date, author }: PostHeaderProps) => {
  const router = useRouter();

  return (
    <>
      <div className="flexcentercol mb-12">
        <BackIcon className="cursor-pointer text-6xl md:text-7xl" onClick={() => router.back()} />
        <PostTitle>{title}</PostTitle>
      </div>
      <div className="hidden justify-between md:mb-12 md:flex md:flex-col md:items-center ">
        <Avatar name={author.name} picture={author.picture} />
        <div className="mt-6 text-xl">
          <Date dateString={date} />
        </div>
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={coverImage} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg md:hidden">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
