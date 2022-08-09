import { Avatar, CoverImage, Date } from '@cpns/shared';
import Link from 'next/link';

const PostPreview = ({ title, coverImage, date, excerpt, author, slug }) => (
  <div>
    <div className="mb-5">
      <CoverImage slug={slug} title={title} image={coverImage} />
    </div>
    <h3 className="mb-3 text-4xl font-semibold leading-snug">
      <Link href={`/posts/${slug}`}>
        <a>{title}</a>
      </Link>
    </h3>
    <div className="mb-6 text-lg">
      <Date dateString={date} />
    </div>
    <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
    <Avatar name={author.name} picture={author.picture} />
  </div>
);

export default PostPreview;
