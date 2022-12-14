import { BASE_URL } from '@/shared';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';

interface MetaProps {
  title: string;
  desc: string;
  locale?: string;
}

export const Meta: FC<MetaProps & PropsWithChildren> = ({ title, desc, locale, children }) => {
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>

      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/imgs/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/imgs/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/imgs/apple-touch-icon.png" />
      <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
      <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />

      <meta name="author" content="yuran1811" />
      <meta name="copyright" content="yuran1811" />
      <meta name="title" content={title} />
      <meta name="description" content={desc} />
      <meta
        name="keywords"
        content={`yuran1811, yuran legends, yuran blog, yuran1811 blog, yuran blog, yuran legends blog, ${title}, ${desc}`}
      />

      <meta name="robots" content="all" />

      <meta property="og:description" content={desc} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${BASE_URL}${router?.asPath || ''}`} />
      <meta
        property="og:image"
        content="https://og-image.vercel.app/**Yuran**%20%20Blog..png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fremojansen%2Flogo.ts%40master%2Fts.svg"
        key="ogImage"
      />
      <meta property="og:image:alt" content="Yuran Blog - Share Image" />
      <meta property="og:locale" content={locale || 'en_US'} />
      <meta property="og:site_name" content="https://yuran1811-blog.vercel.app" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${BASE_URL}${router?.asPath || ''}`} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta
        property="twitter:image"
        content="https://og-image.vercel.app/**Yuran**%20%20Blog..png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fremojansen%2Flogo.ts%40master%2Fts.svg"
      />

      {children}
    </Head>
  );
};
