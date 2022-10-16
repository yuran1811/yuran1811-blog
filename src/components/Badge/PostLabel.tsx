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
        'select-none rounded-full border-current py-2 px-3 text-center font-bold capitalize tracking-tight sm:py-3 sm:px-4',
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
