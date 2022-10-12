import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { PageHead } from "../../components";
import { getFiles, getPostBySlug } from "../../lib";
const ArticlePage = ({ frontMatter, markdownBody }) => {
  console.log(frontMatter);
  return (
    <>
      <PageHead title={frontMatter.title} description={frontMatter.summary} />
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-semibold mb-4">{frontMatter.title}</h1>
        <div className="">
          <ReactMarkdown
            components={{
              h1: (props) => (
                <h1 className="mb-6 mt-8 text-3xl font-bold" {...props} />
              ),
              h2: (props) => (
                <h2 className="mb-6 mt-8 text-2xl font-semibold" {...props} />
              ),
              h3: (props) => (
                <h3 className="mb-6 mt-8 text-xl font-semibold" {...props} />
              ),
              p: (props) => <p className="mb-4 text-lg" {...props} />,
              li: (props) => (
                <li className="my-4 ml-12 list-disc text-lg" {...props} />
              ),
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <div className="my-8">
                    <SyntaxHighlighter
                      showLineNumbers
                      language="js"
                      style={nord}
                      PreTag="div"
                    >
                      {children}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {markdownBody}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
export async function getStaticPaths() {
  const posts = await getFiles();

  const paths = posts.map((filename) => ({
    params: {
      slug: filename.replace(/\.md/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const { frontMatter, markdownBody } = await getPostBySlug(params.slug);

  return {
    props: {
      frontMatter,
      markdownBody,
      params,
    },
  };
}
