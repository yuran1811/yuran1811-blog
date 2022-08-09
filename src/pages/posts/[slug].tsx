import Layout from '@cpns/layouts/Layout';
import MoreStories from '@cpns/Post/MoreStories';
import PostBody from '@cpns/Post/PostBody';
import PostHeader from '@cpns/Post/PostHeader';
import PostTitle from '@cpns/Post/PostTitle';
import { Container, Meta, SectionSeparator } from '@cpns/shared';
import { postQuery, postSlugsQuery } from '@utils/queries';
import { urlForImage, usePreviewSubscription } from '@utils/sanity';
import { getClient, overlayDrafts, sanityClient } from '@utils/sanity.server';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

interface PostProps {
  data: {
    post?: any;
    morePosts?: any[];
  };
  preview: boolean;
}

export default function Post({ data = {}, preview }: PostProps) {
  const router = useRouter();

  const slug = data?.post?.slug;
  const {
    data: { post, morePosts },
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Meta title={`${post?.title || 'Post'} | Yuran Blog`} desc={post?.desc || 'Yuran Blog Post'}>
        {post.coverImage && (
          <meta
            key="ogImage"
            property="og:image"
            content={urlForImage(post.coverImage).width(1200).height(627).fit('crop').url()}
          />
        )}
      </Meta>
      <Layout>
        <Container>
          {router.isFallback ? (
            <PostTitle>Loading ...</PostTitle>
          ) : (
            <>
              <article>
                <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} />
                <PostBody content={post.content} />
              </article>

              <SectionSeparator />

              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const {
    post,
    morePosts,
  }: {
    post: any;
    morePosts: any[];
  } = await getClient(preview).fetch(postQuery, { slug: params.slug });

  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
      },
    },
  };
}

export async function getStaticPaths() {
  const paths: string[] = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
