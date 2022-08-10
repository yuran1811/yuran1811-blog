import { Avatar, CoverImage, CursorEffectWrapper, Date } from '@cpns/shared';
import Link from 'next/link';

const PostPreview = ({ title, coverImage, date, excerpt, author, slug }) => (
  <div>
    <div className="mb-5">
      <CursorEffectWrapper cursorType="link">
        <CoverImage slug={slug} title={title} image={coverImage} />
      </CursorEffectWrapper>
    </div>
    <h3 className="mb-3 text-4xl font-semibold leading-snug">
      <CursorEffectWrapper cursorType="link">
        <Link href={`/posts/${slug}`}>
          <span className="line-clamp-2">{title}</span>
        </Link>
      </CursorEffectWrapper>
    </h3>
    <div className="mb-6 text-lg">
      <Date dateString={date} />
    </div>
    <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
    <Avatar name={author.name} picture={author.picture} />
  </div>
);

export default PostPreview;
