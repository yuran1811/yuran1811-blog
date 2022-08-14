import Layout from '@cpns/layouts/Layout';
import HeroPost from '@cpns/Post/HeroPost';
import MoreStories from '@cpns/Post/MoreStories';
import { Container, Intro, Meta } from '@cpns/shared';
import { usePreviewSubscription } from '@lib/sanity';
import { PostType } from '@shared/types';
import { indexQuery } from '@utils/queries';
import { getClient, overlayDrafts } from '@utils/sanity.server';
import { GetStaticProps } from 'next';

export default function Index({ allPosts: initialAllPosts, preview }) {
  const { data: allPosts } = usePreviewSubscription(indexQuery, {
    initialData: initialAllPosts,
    enabled: preview,
  });

  const [heroPost, ...morePosts] = allPosts as PostType[];

  return (
    <>
      <Meta title="Home - Yuran Blog" desc="Yuran Blog Homepage" />
      <Layout home>
        <Container>
          <Intro />
          {heroPost && <HeroPost postData={heroPost} />}
          {morePosts.length > 0 && <MoreStories href="/categories" posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = true }) => {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: {
      allPosts,
    },
    revalidate: 5,
  };
};
