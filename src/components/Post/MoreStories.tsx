import { CursorEffectWrapper } from '@cpns/shared';
import { PostType } from '@shared/types';
import Link from 'next/link';
import { FC } from 'react';
import PostPreview from './PostPreview';
import c from 'classnames';

interface MoreStoriesProps {
  posts: PostType[];
  title?: string;
  href?: string;
}

const MoreStories: FC<MoreStoriesProps> = ({ posts, title, href }) => (
  <section>
    {!href ? (
      <h2 className="mb-16 text-6xl font-bold capitalize leading-tight tracking-tighter md:text-7xl">
        {title || 'More'}.
      </h2>
    ) : (
      <CursorEffectWrapper cursorType="link">
        <Link href={href}>
          <h2 className="mb-16 text-6xl font-bold capitalize leading-tight tracking-tighter md:text-7xl">
            {title || 'More'}.
          </h2>
        </Link>
      </CursorEffectWrapper>
    )}

    <div
      className={c('mb-20 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32', {
        'pb-32': !href,
      })}
    >
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
        />
      ))}
    </div>

    {!!href && (
      <p className="mb-32 animate-pulse text-center text-xl font-semibold">Click the category title to see all posts</p>
    )}
  </section>
);

export default MoreStories;
