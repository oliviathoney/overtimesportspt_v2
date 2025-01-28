import React from "react";
import { FaAngleLeft } from "react-icons/fa";


export const Article = ({ articleData }) => {
  const { title, subtitle, date, image, content, footer } = articleData;
  return (
    <div className="flex justify-center bg-bgDark2 relative pt-2">
      <div className="px-2 sm:px-4">
        <a href="/blog" class="flex felx-col w-full text-start absolute top-36 font-medium text-highlightColor hover:underline">
          &#x3c; Back to blog posts
        </a>
        <article className="p-8 pt-24 text-center rounded-3xl w-full lg:w-[1200px] 2xl:w-[1400px] mb-24 mt-16 sm:mt-24">

          <header className="mb-12">
            <div className="text-sm text-secondaryText my-4">{date}</div>
            <h1 className="text-[2rem] xs:text-[2.8rem] lg:text-[3.5rem] font-bold text-primaryText mb-4">{title}</h1>
            <p className="text-lg text-secondaryText mb-4">{subtitle}</p>
          </header>
          <img
            src={image.src}
            alt={title}
            className="rounded-3xl mb-8 w-10/12 md:w-3/4 mx-auto mt-8"
            aria-label={title}
          />
          <section
            className="text-secondaryText !leading-8 sm:!leading-10 sm:text-xl text-left sm:text-justify mx-auto w-full md:w-10/12 lg:w-4/5 mt-16"
            aria-labelledby="content-title"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="w-4/5 lg:w-2/3 text-right mx-auto mt-8 text-primaryText text-xl">
            {footer}
          </div>
        </article>
      </div>
    </div>
  );
};
