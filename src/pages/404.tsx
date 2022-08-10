import { BackIcon } from '@cpns/icons';
import Layout from '@cpns/layouts/Layout';
import { Container, CursorEffectWrapper, Meta } from '@cpns/shared';
import type { NextPage } from 'next';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <>
      <Meta title="404 Not Found" desc="Yuran Blog" />
      <Layout>
        <Container>
          <div className="flexcentercol w-full gap-4 overflow-hidden py-20">
            <CursorEffectWrapper cursorType="wrapper">
              <div className="flexcentercol">
                <h1 className="text-9xl font-bold">404</h1>
                <h2 className="text-5xl font-bold">Not Found</h2>
              </div>
            </CursorEffectWrapper>

            <CursorEffectWrapper cursorType="link">
              <Link href="/">
                <div className="flexcenter gap-4 p-6 text-3xl font-semibold">
                  <BackIcon /> Home
                </div>
              </Link>
            </CursorEffectWrapper>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default NotFound;
