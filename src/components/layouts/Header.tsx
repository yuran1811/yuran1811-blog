import { PanelProvider } from '@/contexts';
import Menu from '@cpns/Menu/Menu';
import { ChangeTheme, CursorEffectWrapper } from '@cpns/shared';
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
            <span className="transition-transform hover:scale-105">Yuran Blog.</span>
          </Link>
        </CursorEffectWrapper>

        <div className="px-10">
          <ChangeTheme />
        </div>
      </PanelProvider>
    </header>
  );
}
