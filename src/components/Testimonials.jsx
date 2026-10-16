import { useId, useState } from "react";

const testimonialsData = [
  {
    customerName: "Elizabeth P.",
    customerTitle: "Marathoner",
    excerpt:
      "Edward is an incredible PT and I'm so grateful I discovered Overtime Sports! ... I'm thankful I found a PT whose goal was to get me back to my sport as quickly and safely as possible.",
    content:
      "Edward is an incredible PT and I'm so grateful I discovered Overtime Sports! While trying to increase mileage postpartum, I started having Achilles and calf issues. After taking some time off running, and the pain not subsiding, I reached out to Edward. Within 4 weeks, I'm back to running and am able to train for a marathon. I recognize that some injuries require time off, but not all do. I'm thankful I found a PT whose goal was to get me back to my sport as quickly and safely as possible.",
  },
  {
    customerName: "Blaise R.",
    customerTitle: "Collegiate Soccer Athlete",
    excerpt:
      "Every exercise we performed had a detailed explanation behind why we were doing it, and the progress that I saw was truly amazing. I am now completely healthy and feeling great, and I credit a lot of that to Edward.",
    content:
      "This past March, I partially tore one of my MCL's. I was struggling to find quality PTs, when out of the blue Edward reached out to me on instagram DM's. This was a blessing in disguise. I went to see him, and instantly could tell that he knew what he was doing. Every exercise we performed had a detailed explanation behind why we were doing it, and the progress that I saw was truly amazing. I am now completely healthy and feeling great, and I credit a lot of that to Edward. But, my favorite part has been getting to know him personally. I have truly loved getting to know him and all the laughs shared. He truly cares about your journey both as an athlete as well as a person, and I am grateful to have met him. He still can't beat me in cross bar challenge though:)"
  },
  {
    customerName: "Joe R.",
    customerTitle: "Bodybuilder",
    excerpt:
      "After working with Edward, I have noticed substantial improvement in my range of motion and pain. Edward's knowledge and expertise coupled with his personal approach is what makes him one of the best PTs out there.",
    content:
      "I was suffering with shoulder and biceps pain from heavy weight training. I can't speak to how great Edward was from the start of the process- evaluating what I was dealing with, to pin pointing the potential issue and how it happened, to developing a game plan for a path forward. After working with Edward, I have noticed substantial improvement in my range of motion and pain. Edward's knowledge and expertise coupled with his personal approach is what makes him one of the best PTs out there.",
  },
];

const Review = ({ testimonial, featured = false }) => {
  const [expanded, setExpanded] = useState(false);
  const quoteId = useId();

  return (
    <figure className={featured ? "home-reviews__featured" : "home-reviews__review"}>
      <blockquote>
        <p id={quoteId} className="home-reviews__quote">
          &ldquo;{expanded ? testimonial.content : testimonial.excerpt}&rdquo;
        </p>
      </blockquote>
      <button
        type="button"
        className="home-reviews__expand"
        aria-expanded={expanded}
        aria-controls={quoteId}
        aria-label={`${expanded ? "Show less of" : "Read full"} review from ${testimonial.customerName}`}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Read full review"}
      </button>
      <figcaption className="home-reviews__meta">
        <span className="home-reviews__name">{testimonial.customerName}</span>
        <span className="home-reviews__label">{testimonial.customerTitle}</span>
      </figcaption>
    </figure>
  );
};

export const Testimonials = () => (
    <section className="home-reviews" aria-labelledby="reviews-heading">
      <div className="absolute -top-16" id="feedback" />
      <div className="home-reviews__inner">
        <div className="home-reviews__intro">
          <div>
            <p className="block-subtitle">Patient stories</p>
            <h2 id="reviews-heading">What our patients say.</h2>
          </div>
          <a
            className="home-reviews__rating"
            href="https://maps.app.goo.gl/Ng3fLwf8KgRr15k29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="home-reviews__stars" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((star) => (
                <svg key={star} viewBox="0 0 24 24" fill="currentColor">
                  <path d="m12 2.5 2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55L2.48 9.42l6.58-.96L12 2.5Z" />
                </svg>
              ))}
            </span>
            <span>5.0 &middot; 192+ Google reviews</span>
          </a>
        </div>
        <Review testimonial={testimonialsData[0]} featured />
        <ul className="home-reviews__row" role="list">
          {testimonialsData.slice(1).map((testimonial) => (
            <li key={testimonial.customerName}>
              <Review testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </div>
    </section>
);
