import { labelStyles } from '@lib/theme';
import c from 'classnames';
import { FC } from 'react';

interface PostLabelProps {
  label?: string;
}

export const PostLabel: FC<PostLabelProps> = ({ label: rawLabel }) => {
  const label = rawLabel.toLowerCase();

  return (
    <div
      className={c(
        'select-none rounded-full border-2 border-current py-3 px-4 text-center font-semibold capitalize tracking-wider',
        labelStyles[label]?.bg,
        labelStyles[label]?.color
      )}
    >
      {label || ''}
    </div>
  );
};
