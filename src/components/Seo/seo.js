import React from "react";
import Head from "next/head";

function SEO({ keywords, description, title }) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1  maximum-scale=1, user-scalable=0"
      />
      <meta charSet="utf-8" />
      <title>{"Next title"}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
}

export default SEO