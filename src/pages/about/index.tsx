import Layout from '@cpns/layouts/Layout';
import { Container, Meta } from '@cpns/shared';

export default function About() {
  return (
    <>
      <Meta title="About | Yuran Blog" desc="Yuran Blog About" />
      <Layout>
        <Container>
          <div className="flexcentercol w-full">
            <div className="textcenter text-6xl font-bold">Hello there</div>
            <div className="prose text-current">
              <pre>
                <code className="language-js">
                  {`module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}`}
                </code>
              </pre>
              <ol>
                <li>Hello</li>
                <li>World</li>
              </ol>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
