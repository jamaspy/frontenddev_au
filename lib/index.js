import fs from "fs";
import matter from "gray-matter";
import path from "path";

const root = process.cwd();

export async function getFiles() {
  return fs.readdirSync(path.join(root, "articles"), "utf-8");
}

export async function getPostBySlug(slug) {
  const source = fs.readFileSync(
    path.join(root, "articles", `${slug}.md`),
    "utf8"
  );

  const { data, content } = matter(source);

  return {
    frontMatter: data,
    markdownBody: content,
  };
}

export async function getAllPostsWithFrontMatter() {
  const files = fs.readdirSync(path.join(root, "articles"));

  // @ts-ignore
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "articles", postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        frontMatter: data,
        slug: postSlug.replace(".md", ""),
      },
      ...allPosts,
    ];
  }, []);
}
