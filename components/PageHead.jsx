import Head from "next/head";

const PageHead = ({ title, description }) => {
  return (
    <Head>
      <title>{title || frontenddev.au}</title>
      <meta
        name="description"
        content={description || "Northern beaches web development"}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
export default PageHead;
