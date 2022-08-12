import { Avatar, Date } from '@cpns/shared';
import { DivProps, PostType } from '@shared/types';
import c from 'classnames';
import { FC } from 'react';

type PostCreationProps = Pick<PostType, 'author' | 'date'> &
  Pick<DivProps, 'className'> & {
    preview?: boolean;
  };

export const PostCreation: FC<PostCreationProps> = ({ author, date, className, preview }) => (
  <>
    {!!preview ? (
      <div className="space-y-6 text-lg">
        <Date dateString={date} />
        <Avatar name={author.name} picture={author.picture} />
      </div>
    ) : (
      <div className={c(className)}>
        <div className="flexcentercol gap-4 p-4">
          <Avatar name={author.name} picture={author.picture} />
          <Date dateString={date} />
        </div>
      </div>
    )}
  </>
);
