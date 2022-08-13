import { Hashtag } from '@cpns/Badge/Hashtag';
import { PostLabel } from '@cpns/Badge/PostLabel';
import { CursorEffectWrapper } from '@cpns/shared';
import { DivProps, PostType } from '@shared/types';
import c from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

type PostInfoProps = Pick<PostType, 'label' | 'tags'> &
  Pick<DivProps, 'className'> & {
    isPreview?: boolean;
  };

export const PostInfo: FC<PostInfoProps> = ({ label, tags, className, isPreview }) => (
  <div className={c(className)}>
    <div
      className={c('flex-wrap gap-y-6', {
        flexcentercol: !isPreview,
        'flexcenter gap-x-4': isPreview,
      })}
    >
      <CursorEffectWrapper cursorType="link" className={c({ 'text-3xl': !isPreview })}>
        <Link href={`/categories/${label.toLowerCase()}`}>
          <div>
            <PostLabel label={label} isPreview={isPreview} />
          </div>
        </Link>
      </CursorEffectWrapper>

      <div className="flexcenter flex-wrap gap-y-6">
        {tags
          .split('|')
          .sort()
          .map((tag) => (
            <Hashtag key={tag} href={`/hashtags/${tag}`} tag={tag}>
              {tag}
            </Hashtag>
          ))}
      </div>
    </div>
  </div>
);
