import { ToTop } from '@cpns/shared';
import { FC, PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  home?: boolean;
}

const Layout: FC<LayoutProps & PropsWithChildren> = ({ children, home }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ToTop />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
