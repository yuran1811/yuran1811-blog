import { BackIcon } from '@cpns/icons/BackIcon';
import { CoverImage, CursorEffectWrapper } from '@cpns/shared';
import { PostType } from '@shared/types';
import { useRouter } from 'next/router';
import { PostCreation } from './PostCreation';
import { PostInfo } from './PostInfo';
import PostTitle from './PostTitle';

type PostHeaderProps = Pick<PostType, 'author' | 'title' | 'coverImage' | 'date' | 'label' | 'tags'>;

const PostHeader = ({ title, coverImage, date, author, label, tags }: PostHeaderProps) => {
  const router = useRouter();

  return (
    <>
      <div className="flexcentercol mb-12">
        <CursorEffectWrapper cursorType="link">
          <BackIcon className="text-6xl md:text-7xl" onClick={() => router.back()} />
        </CursorEffectWrapper>
        <PostTitle>{title}</PostTitle>
      </div>
      <PostCreation
        className="mb-12 hidden justify-between text-xl md:flex md:flex-col md:items-center"
        author={author}
        date={date}
      />
      <PostInfo className="flexcenter -mb-20 block w-full text-lg" label={label} tags={tags} /> {/*  md:hidden */}
      <div className="relative mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={coverImage} />
      </div>
      <PostCreation className="mx-auto mb-16 block max-w-2xl text-lg md:hidden" author={author} date={date} />
    </>
  );
};

export default PostHeader;
