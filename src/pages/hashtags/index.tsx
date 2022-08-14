import Layout from '@cpns/layouts/Layout';
import MoreStories from '@cpns/Post/MoreStories';
import { Container, Heading, Meta } from '@cpns/shared';
import { allPostsQuery } from '@lib/queries';
import { getClient, overlayDrafts } from '@lib/sanity.server';
import { PostType } from '@shared/types';
import __ from 'lodash';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

interface HashtagsProps {
  allPosts: {
    hashtag: string;
    posts: PostType[];
  }[];
}

export default function Hashtags({ allPosts }: HashtagsProps) {
  const { pathname } = useRouter();

  return (
    <>
      <Meta title="Hashtags | Yuran Blog" desc="Yuran Blog Hashtags" />
      <Layout>
        <Container>
          <Heading>Hashtags.</Heading>
          <div className="space-y-8">
            {allPosts.map(({ hashtag, posts }) => (
              <div key={hashtag}>
                <MoreStories isHashtag title={hashtag} href={`${pathname}/${hashtag}`} posts={posts} />
              </div>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = overlayDrafts(await getClient(preview).fetch(allPostsQuery)) as PostType[];
  const hashtags = Array.from(new Set(__.flatMap(allPosts?.map((post) => post?.tags?.split('|') || []) || [])));

  return {
    props: {
      allPosts: hashtags?.map((tag) => ({
        hashtag: tag,
        posts: allPosts?.filter((post) => post?.tags?.includes(tag))?.slice(0, 4) || [],
      })),
    },
    revalidate: 5,
  };
};
