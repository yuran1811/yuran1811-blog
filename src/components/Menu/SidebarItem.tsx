import c from 'classnames';
import Link from 'next/link';
import { FC, PropsWithChildren, useState } from 'react';

interface SidebarItemProps {
  href?: string;
  label?: string;
  icon?: JSX.Element;
  expanded?: boolean;
}

export const SidebarItem: FC<SidebarItemProps & PropsWithChildren> = ({ href, label, icon, expanded, children }) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <li>
      {!!expanded ? (
        <div>
          <div className="flex cursor-pointer items-center justify-start gap-4" onClick={() => setExpanded((s) => !s)}>
            {icon || ''} {label || ''}
          </div>
          {isExpanded && (
            <div
              className={c('hidden', {
                '!block': expanded,
              })}
            >
              {children}
            </div>
          )}
        </div>
      ) : (
        <Link href={`${href || '/'}`}>
          <div className="flex cursor-pointer items-center justify-start gap-4">
            {icon || ''} {label || ''}
          </div>
        </Link>
      )}
    </li>
  );
};
