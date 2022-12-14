import { PanelProvider } from '@/contexts';
import Menu from '@cpns/Menu/Menu';
import { ChangeTheme, CursorEffectWrapper, ScrollProgress } from '@cpns/shared';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flexcenter sticky top-0 left-0 z-50 !justify-between bg-gradient-to-b from-white py-8 text-center text-2xl font-bold leading-tight tracking-tight backdrop-blur-[8px] dark:from-[#121212] md:text-4xl md:tracking-tighter">
      <PanelProvider>
        <div className="px-10">
          <Menu />
        </div>

        <CursorEffectWrapper cursorType="wrapper">
          <Link href="/">
            <div>
              <span className="min-[380px]:block hidden transition-transform hover:scale-105">Yuran Blog.</span>
              <span className="min-[380px]:hidden">YBlog.</span>
            </div>
          </Link>
        </CursorEffectWrapper>

        <div className="px-10">
          <ChangeTheme />
        </div>
      </PanelProvider>

      <ScrollProgress />
    </header>
  );
}
