import { getImage } from "astro:assets";
import { blogPosts } from "../data/blogPosts";
import "../styles/Blog.css";

const posts = await Promise.all(
  blogPosts.map(async (post) => ({
    ...post,
    thumbnail: await getImage({
      src: post.image,
      width: 1000,
      widths: [320, 480, 720, 1000],
      format: "webp",
      quality: 85,
    }),
  })),
);

export const BlogList = () => (
  <section className="blog-index" aria-labelledby="blog-heading">
    <div className="blog-container">
      <header className="blog-index__intro">
        <p className="block-subtitle">Our Blog</p>
        <h1 id="blog-heading">Latest Insights</h1>
        <p className="blog-index__description">
          Hear more from our Doctor of Physical Therapy about latest insights and
          trends in the industry. We are determined to stay on the cutting-edge
          and keep our patients up-to-date.
        </p>
      </header>
      <ul className="blog-grid">
        {posts.map((post, index) => (
          <li key={post.slug} className={index === 0 ? "blog-grid__featured" : undefined}>
            <article className="blog-card" aria-labelledby={`post-${post.slug}`}>
              <a href={`/blog/${post.slug}`} aria-labelledby={`post-${post.slug}`}>
                <div className={`blog-card__image${post.thumbnailFit === "contain" ? " blog-card__image--natural" : ""}`}>
                  <img
                    src={post.thumbnail.src}
                    srcSet={post.thumbnail.srcSet.attribute}
                    sizes={index === 0
                      ? "(min-width: 768px) 240px, calc(100vw - 32px)"
                      : "(min-width: 1200px) 565px, (min-width: 768px) 48vw, calc(100vw - 32px)"}
                    width={post.thumbnail.options.width}
                    height={post.thumbnail.options.height}
                    alt=""
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
                <div className="blog-card__body">
                  <time dateTime={post.publishDate}>{post.publish}</time>
                  <h2 id={`post-${post.slug}`}>{post.listTitle ?? post.title}</h2>
                  <p>{post.excerpt}</p>
                  <span className="blog-card__link">
                    Read more <span aria-hidden="true">{"\u2197"}</span>
                  </span>
                </div>
              </a>
            </article>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
