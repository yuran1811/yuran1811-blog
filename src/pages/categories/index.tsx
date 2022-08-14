import Layout from '@cpns/layouts/Layout';
import MoreStories from '@cpns/Post/MoreStories';
import { Container, Heading, Meta } from '@cpns/shared';
import { categoriesQuery } from '@lib/queries';
import { getClient } from '@lib/sanity.server';
import { CATEGORIES } from '@shared/constants';
import { PostType } from '@shared/types';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

interface CategoriesProps {
  allPosts: {
    [key: string]: PostType[];
  };
}

export default function Categories({ allPosts }: CategoriesProps) {
  const { pathname } = useRouter();

  return (
    <>
      <Meta title="Categories | Yuran Blog" desc="Yuran Blog Categories" />
      <Layout>
        <Container>
          <Heading>Categories.</Heading>
          <div className="space-y-8">
            {Object.entries(allPosts).map(([key, val]) => (
              <MoreStories key={key} title={key} href={`${pathname}/${key}`} posts={val} />
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getClient(preview).fetch(categoriesQuery(CATEGORIES));
  return {
    props: {
      allPosts,
    },
    revalidate: 5,
  };
};
