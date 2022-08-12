import { Hashtag } from '@cpns/Badge/Hashtag';
import { PostLabel } from '@cpns/Badge/PostLabel';
import { CursorEffectWrapper } from '@cpns/shared';
import { DivProps, PostType } from '@shared/types';
import c from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

type PostInfoProps = Pick<PostType, 'label' | 'tags'> & Pick<DivProps, 'className'>;

export const PostInfo: FC<PostInfoProps> = ({ label, tags, className }) => (
  <div className={c(className)}>
    <div className="flexcentercol gap-y-6">
      <div className="text-3xl">
        <CursorEffectWrapper cursorType="link">
          <Link href={`/categories/${label.toLowerCase()}`}>
            <div>
              <PostLabel label={label} />
            </div>
          </Link>
        </CursorEffectWrapper>
      </div>

      <div className="flexcenter flex-wrap gap-y-6">
        {tags
          .split('|')
          .sort()
          .map((tag) => (
            <Hashtag key={tag} href={`/categories/${tag}`} tag={tag}>
              {tag}
            </Hashtag>
          ))}
      </div>
    </div>
  </div>
);
