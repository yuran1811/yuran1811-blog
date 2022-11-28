import { CoverImage, CursorEffectWrapper } from '@cpns/shared';
import { PostType } from '@shared/types';
import Link from 'next/link';
import { FC } from 'react';
import { PostCreation } from './PostCreation';
import { PostInfo } from './PostInfo';

interface PostPreviewProps {
  postData: PostType;
}

const PostPreview: FC<PostPreviewProps> = ({ postData: { title, coverImage, date, author, slug, label, tags } }) => (
  <div>
    <div className="mb-5">
      <CursorEffectWrapper cursorType="link">
        <CoverImage slug={slug} title={title} image={coverImage} />
      </CursorEffectWrapper>
    </div>
    <h2 className="mb-3 text-2xl font-semibold sm:text-3xl">
      <CursorEffectWrapper cursorType="link">
        <Link href={`/posts/${slug}`}>
          <span className="line-clamp-2 leading-normal">{title}</span>
        </Link>
      </CursorEffectWrapper>
    </h2>
    <PostCreation author={author} date={date} preview />
    <PostInfo isPreview className="mt-6" label={label} tags={tags} />
  </div>
);

export default PostPreview;
