import 'highlight.js/styles/tokyo-night-dark.css';
import { forwardRef } from 'react';

interface PostBodyProps {
  content: string;
}

const PostBody = forwardRef<HTMLDivElement, PostBodyProps>(({ content }, ref) => {
  return (
    <div
      ref={ref}
      className="prose md:prose-lg dark:prose-invert lg:prose-xl prose-zinc markdown mx-auto max-w-2xl text-current"
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
});

export default PostBody;
