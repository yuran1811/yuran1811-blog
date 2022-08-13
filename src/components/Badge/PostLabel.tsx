import { labelStyles } from '@lib/theme';
import c from 'classnames';
import { FC } from 'react';

interface PostLabelProps {
  label?: string;
  isPreview?: boolean;
}

export const PostLabel: FC<PostLabelProps> = ({ label: rawLabel, isPreview }) => {
  const label = rawLabel.toLowerCase();

  return (
    <div
      className={c(
        'select-none rounded-full border-current py-3 px-4 text-center font-bold capitalize tracking-tight',
        labelStyles[label]?.bg,
        labelStyles[label]?.color,
        {
          'border-[6px]': !isPreview,
          'border-4': isPreview,
        }
      )}
    >
      {label || ''}
    </div>
  );
};
