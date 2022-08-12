import Layout from '@cpns/layouts/Layout';
import HeroPost from '@cpns/Post/HeroPost';
import MoreStories from '@cpns/Post/MoreStories';
import { Container, Intro, Meta } from '@cpns/shared';
import { indexQuery } from '@utils/queries';
import { getClient, overlayDrafts } from '@utils/sanity.server';
import { GetStaticProps } from 'next';

export default function Index({ allPosts }) {
  const [heroPost, ...morePosts] = allPosts;

  return (
    <>
      <Meta title="Yuran Blog" desc="Yuran Blog Homepage" />
      <Layout home>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              author={heroPost.author}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              label={heroPost.label}
              slug={heroPost.slug}
              tags={heroPost.tags}
              title={heroPost.title}
            />
          )}
          {morePosts.length > 0 && <MoreStories href="/categories" posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return { props: { allPosts } };
};
