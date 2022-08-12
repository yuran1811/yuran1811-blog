import { CoverImage, CursorEffectWrapper } from '@cpns/shared';
import Link from 'next/link';
import { PostCreation } from './PostCreation';

const PostPreview = ({ title, coverImage, date, author, slug }) => (
  <div>
    <div className="mb-5">
      <CursorEffectWrapper cursorType="link">
        <CoverImage slug={slug} title={title} image={coverImage} />
      </CursorEffectWrapper>
    </div>
    <h2 className="mb-3 text-4xl font-semibold leading-snug">
      <CursorEffectWrapper cursorType="link">
        <Link href={`/posts/${slug}`}>
          <span className="line-clamp-2">{title}</span>
        </Link>
      </CursorEffectWrapper>
    </h2>
    <PostCreation author={author} date={date} preview />
  </div>
);

export default PostPreview;
