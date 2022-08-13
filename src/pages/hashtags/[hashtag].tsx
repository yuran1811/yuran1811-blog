import { BackIcon } from '@cpns/icons';
import Layout from '@cpns/layouts/Layout';
import MoreStories from '@cpns/Post/MoreStories';
import PostTitle from '@cpns/Post/PostTitle';
import { Container, CursorEffectWrapper, Meta } from '@cpns/shared';
import { allPostsQuery, postsByQuery } from '@lib/queries';
import { getClient, overlayDrafts, sanityClient } from '@lib/sanity.server';
import NotFound from '@pages/404';
import { PostType } from '@shared/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import __ from 'lodash';

interface HashTagsProps {
  posts: PostType[];
  hashtag: string;
}

export default function HashTags({ posts, hashtag }: HashTagsProps) {
  const router = useRouter();

  if (!router.isFallback && !hashtag && !posts) {
    return <NotFound />;
  }

  return (
    <>
      <Meta
        title={`${hashtag || ''} - Hashtag | Yuran Blog`}
        desc={`Yuran Blog - Search posts with hashtag: ${hashtag}`}
      />
      <Layout>
        <Container>
          {router.isFallback ? (
            <PostTitle>Loading ...</PostTitle>
          ) : (
            <>
              <CursorEffectWrapper cursorType="link" className="flexcenter my-10">
                <BackIcon className="text-6xl md:text-7xl" onClick={() => router.back()} />
              </CursorEffectWrapper>
              <MoreStories isHashtag title={hashtag} posts={posts} />
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const allPosts = overlayDrafts(await getClient(preview).fetch(allPostsQuery)) as PostType[];
  const thisHashtag: string = (params?.hashtag as string) || '';

  return {
    props: {
      posts: allPosts?.filter((post) => post?.tags?.includes(thisHashtag)),
      hashtag: params?.hashtag || '',
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = overlayDrafts(await sanityClient.fetch(allPostsQuery)) as PostType[];
  return {
    paths: Array.from(
      new Set(
        __.flatMap(
          allPosts?.map((post) =>
            post?.tags?.split('|')?.map((hashtag) => ({
              params: { hashtag },
            }))
          )
        )
      )
    ),
    fallback: false,
  };
};
