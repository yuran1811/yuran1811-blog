import { BASE_URL } from '@/shared';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';

interface MetaProps {
  title: string;
  desc: string;
}

export const Meta: FC<MetaProps & PropsWithChildren> = ({ title, desc, children }) => {
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

      <meta name="title" content={title} />
      <meta name="description" content={desc} />

      <meta name="robots" content="all" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${BASE_URL}${router?.asPath || ''}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={'/assets/imgs/favicon-32x32.png'} key="ogImage" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${BASE_URL}${router?.asPath || ''}`} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />

      {children}
    </Head>
  );
};
