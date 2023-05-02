interface Props {
  title: string;
  description: string;
}

import Head from "next/head";

export const Seo = ({ title, description }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <link rel="icon" href="/favicon.ico"></link>
    </Head>
  );
};
