import "../styles/Blog.css";

export const Article = ({ articleData, image, relatedPosts }) => (
  <div className="blog-article">
    <div className="blog-container">
      <a href="/blog" className="blog-back">
        <span aria-hidden="true">{"\u2190"}</span> Back to blog posts
      </a>
      <article aria-labelledby="article-heading">
        <header className="blog-article__header">
          <p className="block-subtitle">Our Blog</p>
          <time dateTime={articleData.publishDate}>{articleData.publish}</time>
          <h1 id="article-heading">{articleData.title}</h1>
          <p className="blog-article__subtitle">{articleData.subtitle}</p>
        </header>
        <img
          className="blog-article__image"
          src={image.src}
          srcSet={image.srcSet.attribute}
          sizes="(min-width: 1200px) 1150px, calc(100vw - 32px)"
          width={image.options.width}
          height={image.options.height}
          alt={articleData.title}
          loading="eager"
          decoding="async"
        />
        <div className="blog-article__layout">
          <div
            className="blog-article__content"
            dangerouslySetInnerHTML={{ __html: articleData.text }}
          />
          <aside className="blog-article__sidebar" aria-labelledby="related-heading">
            <p className="block-subtitle">Keep Reading</p>
            <h2 id="related-heading">More From Overtime</h2>
            <ul>
              {relatedPosts.map((post) => (
                <li key={post.slug}>
                  <a href={`/blog/${post.slug}`}>
                    {post.listTitle ?? post.title}
                    <span aria-hidden="true">{"\u2197"}</span>
                  </a>
                </li>
              ))}
            </ul>
            <nav aria-label="Explore Overtime" className="blog-article__explore">
              <a href="/services">Explore Our Services <span aria-hidden="true">{"\u2197"}</span></a>
              <a href="/resources">Frequently Asked Questions <span aria-hidden="true">{"\u2197"}</span></a>
              <a href="/blog">All Blog Posts <span aria-hidden="true">{"\u2197"}</span></a>
            </nav>
          </aside>
        </div>
      </article>
    </div>
  </div>
);
