import { BASE_URL } from '@/shared/constants';
import { recentPostsQuery } from '@lib/queries';
import { sanityClient } from '@lib/sanity.server';
import { PostType } from '@shared/types';
import { NextApiHandler } from 'next';

const getRecentPosts: NextApiHandler = async (req, res) => {
  const posts = await sanityClient.fetch(recentPostsQuery);
  if (!posts) {
    return res.status(500).json({
      error: 'Cannot get the recent posts',
    });
  }

  const result = posts.map((post: PostType) => ({
    title: post.title,
    url: `${BASE_URL}/posts/${post.slug}`,
  }));

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(result);
};

export default getRecentPosts;
