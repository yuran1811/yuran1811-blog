import { HashtagIcon, StackIcon, UserIcon } from '@cpns/icons';
import { Overlay } from '@cpns/shared';
import { FC } from 'react';
import { SidebarItem } from './SidebarItem';

interface SidebarProps {
  onClickOutside: CallableFunction;
}

const Sidebar: FC<SidebarProps> = ({ onClickOutside }) => (
  <nav className="absolute top-3/4 left-0 transition-all">
    <Overlay zIdx="z-[-1]" onClick={() => onClickOutside()} />

    <ul className="scrollY relative top-8 flex h-screen w-screen flex-col items-start justify-start gap-6 border-t-2 border-[#121212] bg-white p-6 pt-8 pb-40 dark:border-white dark:bg-[#121212] sm:max-w-sm sm:gap-12 sm:border-r-2 sm:pt-12 sm:pl-12">
      <SidebarItem href="/about" label="About" icon={<UserIcon />} />
      <SidebarItem href="/categories" label="Categories" icon={<StackIcon />} />
      <SidebarItem href="/hashtags" label="Hashtags" icon={<HashtagIcon />} />
      {/* <SidebarItem href="/handbook" label="Handbook" icon={<BookIcon />} /> */}
    </ul>
  </nav>
);

export default Sidebar;
