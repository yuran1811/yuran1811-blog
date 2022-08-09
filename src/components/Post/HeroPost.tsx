import { Avatar, CoverImage, Date } from '@cpns/shared';
import Link from 'next/link';

const HeroPost = ({ title, coverImage, date, excerpt, author, slug }) => (
  <section>
    <CoverImage slug={slug} title={title} image={coverImage} />

    <div className="mb-20 w-full bg-white backdrop-blur-md dark:bg-[#121212]/40 md:mb-28">
      <div className="mx-auto -mt-8 w-full p-6 md:grid md:w-4/5 md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div className="space-y-4">
          <h3 className="text-4xl font-semibold leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`}>
              <a>{title}</a>
            </Link>
          </h3>
          <div className="text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg leading-relaxed">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </div>
  </section>
);

export default HeroPost;
