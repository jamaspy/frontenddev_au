import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
const Article = ({ date, title, summary, slug }) => {
  return (
    <article className=" rounded-lg flex flex-col p-4 mb-4 hover:bg-slate-100">
      <p className="text-slate-400">| {date}</p>
      <p className="text-lg text-slate-800 my-4">{title}</p>
      <p>{summary}</p>
      <Link passHref href={`/articles/${slug}`}>
        <a className="flex flex-row items-center justify-start text-sky-600 mt-4">
          <p className="mr-2">Read More</p>
          <FaChevronRight className="w-3 h-3" />
        </a>
      </Link>
    </article>
  );
};

export default Article;
