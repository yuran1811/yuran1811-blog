import 'highlight.js/styles/tokyo-night-dark.css';

const PostBody = ({ content }: { content: string }) => {
  return (
    <div className="prose md:prose-lg dark:prose-invert lg:prose-xl prose-zinc markdown mx-auto max-w-2xl text-current">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;
