import { Avatar, CoverImage, CursorEffectWrapper, Date } from '@cpns/shared';
import Link from 'next/link';

const HeroPost = ({ title, coverImage, date, author, slug, label, tags }) => (
  <section>
    <CursorEffectWrapper cursorType="link">
      <CoverImage slug={slug} title={title} image={coverImage} isPriority />
    </CursorEffectWrapper>

    <div className="mb-20 w-full bg-white backdrop-blur-md dark:bg-[#121212]/40 md:mb-28">
      <div className="flexcentercol mx-auto -mt-8 w-full p-6 md:flex-row">
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold leading-tight lg:text-6xl">
            <CursorEffectWrapper cursorType="link">
              <Link href={`/posts/${slug}`}>
                <div className="line-clamp-3 text-center md:text-left">{title}</div>
              </Link>
            </CursorEffectWrapper>
          </h2>
          <div className="text-center text-lg md:mb-0 md:text-left">
            <Date dateString={date} />
          </div>
        </div>
        <div className="mt-6 px-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </div>
  </section>
);

export default HeroPost;
