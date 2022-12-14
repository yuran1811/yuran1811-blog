import { CursorEffectWrapper } from '@cpns/shared';
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
    <CursorEffectWrapper cursorType="link">
      <li>
        {!!expanded ? (
          <div>
            <Link href={label.toLowerCase() || '/'}>
              <div
                className="flex items-center justify-start gap-4 text-2xl sm:text-3xl"
                onContextMenu={(e) => {
                  e.preventDefault();
                  setExpanded((s) => !s);
                }}
              >
                {icon || ''} {label || ''}
              </div>
            </Link>
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
          <CursorEffectWrapper cursorType="link">
            <Link href={`${href || '/'}`}>
              <div className="flex items-center justify-start gap-4 text-2xl sm:text-3xl">
                {icon || ''} {label || ''}
              </div>
            </Link>
          </CursorEffectWrapper>
        )}
      </li>
    </CursorEffectWrapper>
  );
};
