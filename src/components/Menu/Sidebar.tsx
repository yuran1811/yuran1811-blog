import { BookIcon, StackIcon, UserIcon } from '@cpns/icons';
import { Overlay } from '@cpns/shared';
import { FC } from 'react';
import { SidebarItem } from './SidebarItem';

interface SidebarProps {
  onClickOutside: CallableFunction;
}

const Sidebar: FC<SidebarProps> = ({ onClickOutside }) => (
  <nav className="absolute top-full left-0 transition-all">
    <Overlay zIdx="z-[-1]" onClick={() => onClickOutside()} />

    <ul className="scrollY relative top-8 -left-10 flex h-screen max-h-[calc(100vh-6.7rem)] w-screen flex-col items-start justify-start gap-12 border-t-2 border-[#121212] bg-white p-6 pt-12 pl-12 dark:border-white dark:bg-[#121212] sm:w-96 sm:border-r-2">
      <SidebarItem href="/about" label="About" icon={<UserIcon />} />

      <SidebarItem expanded label="Categories" icon={<StackIcon />}>
        <ul className="ml-12 mt-8 w-full space-y-8">
          <SidebarItem href="/pts" label="PTS" />
          <SidebarItem href="/code" label="Code" />
          <SidebarItem href="/life" label="Life" />
        </ul>
      </SidebarItem>

      <SidebarItem href="/handbook" label="Handbook" icon={<BookIcon />} />
    </ul>
  </nav>
);

export default Sidebar;
