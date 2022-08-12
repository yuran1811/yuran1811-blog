import { BackIcon } from '@cpns/icons';
import Layout from '@cpns/layouts/Layout';
import MoreStories from '@cpns/Post/MoreStories';
import PostTitle from '@cpns/Post/PostTitle';
import { Container, CursorEffectWrapper, Meta } from '@cpns/shared';
import { postsByQuery } from '@lib/queries';
import { getClient, overlayDrafts } from '@lib/sanity.server';
import NotFound from '@pages/404';
import { CATEGORIES } from '@shared/constants';
import { PostType } from '@shared/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

interface CategoryProps {
  posts: PostType[];
  label: string;
}

export default function Category({ posts, label }: CategoryProps) {
  const router = useRouter();

  if (!router.isFallback && !label && !posts) {
    return <NotFound />;
  }

  const title = label?.[0]?.toUpperCase() + label?.slice(1) + ' Categories';

  return (
    <>
      <Meta title={`${title || 'Categories'} | Yuran Blog`} desc={`Yuran Blog ${title}`} />
      <Layout>
        <Container>
          {router.isFallback ? (
            <PostTitle>Loading ...</PostTitle>
          ) : (
            <>
              <CursorEffectWrapper cursorType="link" className="flexcenter my-10">
                <BackIcon className="text-6xl md:text-7xl" onClick={() => router.back()} />
              </CursorEffectWrapper>
              <MoreStories title={label || ''} posts={posts} />
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const posts = overlayDrafts(
    await getClient(preview).fetch(postsByQuery('label'), {
      label: params?.label || '',
    })
  );
  return { props: { posts, label: params?.label || '' } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: CATEGORIES.map((label) => ({ params: { label: label || '' } })) || [],
    fallback: true,
  };
};
