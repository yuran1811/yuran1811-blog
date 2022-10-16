import { BackButton, CoverImage, CursorEffectWrapper } from '@cpns/shared';
import { PostType } from '@shared/types';
import { useRouter } from 'next/router';
import { PostCreation } from './PostCreation';
import { PostInfo } from './PostInfo';
import PostShare from './PostShare';
import PostTitle from './PostTitle';

type PostHeaderProps = Pick<PostType, 'author' | 'title' | 'coverImage' | 'date' | 'label' | 'tags'>;

const PostHeader = ({ title, coverImage, date, author, label, tags }: PostHeaderProps) => {
  const router = useRouter();

  return (
    <>
      <div className="flexcentercol mb-12">
        <CursorEffectWrapper cursorType="link">
          <BackButton router={router} />
        </CursorEffectWrapper>
        <PostTitle>{title}</PostTitle>
      </div>

      <div className="relative mt-20 mb-4 sm:mx-0 md:mb-10">
        <PostInfo className="flexcenter absolute -top-10 z-[1] block w-full text-lg" label={label} tags={tags} />
        <CoverImage className="z-[0]" title={title} image={coverImage} isPriority />
      </div>

      <div className="flexcenter mb-16 flex-wrap gap-8">
        <PostCreation className="max-w-2xl text-lg" author={author} date={date} />
        <PostShare title={title} />
      </div>
    </>
  );
};

export default PostHeader;
