import { postsByQuery } from '@/utils/queries';
import { previewClient } from '@/utils/sanity.server';
import { NextApiRequest, NextApiResponse } from 'next';

function redirectToPreview(res: NextApiResponse, Location: string) {
  res.setPreviewData({});
  res.writeHead(307, { Location });
  res.end();
}

export default async function preview(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  if (!req.query.slug) {
    return redirectToPreview(res, `/`);
  }

  const post = await previewClient.fetch(postsByQuery(), { slug: req.query.slug });
  if (!post) return res.status(401).json({ message: 'Invalid slug' });

  redirectToPreview(res, `/posts/${post.slug}`);
}
