import { useStore } from '@/store';
import Layout from '@cpns/layouts/Layout';
import MoreStories from '@cpns/Post/MoreStories';
import PostBody from '@cpns/Post/PostBody';
import PostHeader from '@cpns/Post/PostHeader';
import PostShare from '@cpns/Post/PostShare';
import PostTitle from '@cpns/Post/PostTitle';
import { Container, Meta, SectionSeparator } from '@cpns/shared';
import { getHTMLPostContent } from '@lib/mdToHtml';
import NotFound from '@pages/404';
import { PostType } from '@shared/types';
import { postQuery, postSlugsQuery } from '@utils/queries';
import { urlForImage, usePreviewSubscription } from '@utils/sanity';
import { getClient, overlayDrafts, sanityClient } from '@utils/sanity.server';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

interface PostProps {
  data: {
    post: PostType;
    morePosts: any[];
  };
  preview: boolean;
}

export default function Post({ data, preview }: PostProps) {
  const setProgressBar = useStore((s) => s.setProgressBar);

  const bodyRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const slug = data?.post?.slug;
  const { data: previewSubs } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && !!slug,
  });

  useEffect(() => {
    bodyRef.current && setProgressBar(bodyRef.current);
  }, []);

  if ((!router.isFallback && !slug) || !previewSubs || !previewSubs?.post || !previewSubs?.morePosts) {
    return <NotFound />;
  }

  return (
    <>
      <Meta
        title={`${previewSubs.post.title || 'Post'} | Yuran Blog`}
        desc={previewSubs.post.desc || 'Yuran Blog Post'}
      >
        {!!previewSubs.post.coverImage && (
          <meta
            key="ogImage"
            property="og:image"
            content={urlForImage(previewSubs.post.coverImage).width(1200).height(627).fit('crop').url()}
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
                <PostHeader
                  author={previewSubs.post.author}
                  coverImage={previewSubs.post.coverImage}
                  date={previewSubs.post.date}
                  label={previewSubs.post?.label || ''}
                  tags={previewSubs.post?.tags || ''}
                  title={previewSubs.post.title}
                />
                <PostBody ref={bodyRef} content={previewSubs.post.content} />
              </article>

              <SectionSeparator />

              {previewSubs.morePosts.length > 0 && <MoreStories posts={previewSubs.morePosts} />}
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, { slug: params?.slug || '' });
  const postContent = getHTMLPostContent(post?.content || '');

  return {
    props: {
      preview,
      data: {
        post: { ...post, content: postContent } || ({} as PostType),
        morePosts: morePosts ? overlayDrafts(morePosts) : [],
      },
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })) || [],
    fallback: false,
  };
};
