import { PortableText } from '@portabletext/react';

const PostBody = ({ content }) => (
  <div className="markdown mx-auto max-w-2xl">
    <PortableText value={content} />
  </div>
);

export default PostBody;
