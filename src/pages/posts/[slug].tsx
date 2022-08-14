import { useStore } from '@/store';
import Layout from '@cpns/layouts/Layout';
import MoreStories from '@cpns/Post/MoreStories';
import PostBody from '@cpns/Post/PostBody';
import PostHeader from '@cpns/Post/PostHeader';
import PostTitle from '@cpns/Post/PostTitle';
import { Container, Meta, SectionSeparator } from '@cpns/shared';
import { getHTMLPostContent } from '@lib/mdToHtml';
import { viCharValidate } from '@lib/standardize';
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
    morePosts: PostType[];
  };
  preview: boolean;
}

export default function Post({ data, preview }: PostProps) {
  const setProgressBar = useStore((s) => s.setProgressBar);

  const bodyRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const slug = data?.post?.slug || '';
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

  const { post, morePosts } = previewSubs;

  return (
    <>
      <Meta
        title={`${post.title || 'Post'} | Yuran Blog`}
        desc={post.desc || 'Yuran Blog Post'}
        locale={viCharValidate(post.title) ? 'vi_VN' : 'en_US'}
      >
        {!!post.coverImage && (
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
                <PostHeader
                  author={post.author}
                  coverImage={post.coverImage}
                  date={post.date}
                  label={post?.label || ''}
                  tags={post?.tags || ''}
                  title={post.title}
                />
                <PostBody ref={bodyRef} content={post.content} />
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
    revalidate: 5,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths?.map((slug) => ({ params: { slug } })) || [],
    fallback: false,
  };
};
