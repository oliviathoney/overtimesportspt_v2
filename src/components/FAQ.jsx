import "../styles/FAQ.css";

const FAQData = [
  {
    category: "getting-started",
    question: "Do I need physical therapy?",
    answer:
      `
       If you are an athlete or an active individual who has been injured before or wants to take your
      game to the next level, you will benefit from physical therapy. At OVERTIME Sports PT +
      Performance we take pride in not only making you feel better and return to sport, but also
      excelling in your sport. Athletes can benefit from PT all year round, to make sure we are
      addressing any strength impairments, mobility, asymmetries to minimize the risk of injury. So
      whether you need sports rehabilitation to help you with your injury, recovery to make sure you 
      are ready to go for your big event this weekend, or performance to excel your skill, PT at 
      OVERTIME Sports PT + Performance is for you.
      `
  },
  {
    category: "your-visits",
    question: "What should I expect in my first session?",
    answer:
      `
      Our Physical Therapists will take you through a comprehensive initial evaluation that will
      consist of a sport specific movement assessment and special tests to get to the root of your
      injuries or impairments. Then we will discuss findings and together we will develop a plan of
      care to get you back to your sport as soon and as safely as possible. We may perform manual
      therapy techniques and corrective therapeutic interventions as well.
      `
  },
  {
    category: "your-visits",
    question: "What are our sessions like?",
    answer:
      `
      We will always start with an initial discussion to hear your wins and sticks. At OVERTIME, we
      value assessments. We will assess and reassess so we can celebrate the wins. Typically, we will
      start with hands-on/manual therapy techniques consisting of various tools that we have on site.
      We will then follow up with corrective exercises and movements to address impairments and get
      you back stronger.
      `
  },
  {
    category: "your-visits",
    question: "What should I wear?",
    answer:
      "Please wear comfortable and/or athletic clothing.",
  },
  {
    category: "insurance-payments",
    question: "Do you take insurance?",
    answer:
      `
      At OVERTIME Sports PT + Performance we do not accept insurance. If you would like to submit for
      out-of-network benefits, we will provide you with a superbill with the documentation needed for
      reimbursement, based on your insurance provider. Please note that reimbursement rates vary, and
      reimbursement is not guaranteed.
      `
  },
  {
    category: "insurance-payments",
    question: "What type of payments do you accept?",
    answer:
      `
      We accept cash, check, debit card and credit card. We also accept Health Savings Account (HSA)
      payments. We are happy to discuss payment plan options as
      well. It is our policy that payment is made at the time of service.
      `
  },
  {
    category: "getting-started",
    question: "Do you only work with athletes?",
    answer:
      `
      At OVERTIME Sports PT + Performance, everyone is an athlete. We would love to work with you
      whether you are a high level athlete or just getting started in your active journey.
      `
  },
  {
    category: "getting-started",
    question: "How do I schedule an appointment?",
    answer:
      `
      Please feel free to call or text (720) 771-9677, email us at info@overtimesportspt.com, or use
      the Book a Free Consultation button below to request a phone consultation.
      `
  },
];

const categories = [
  { id: "getting-started", title: "Getting Started" },
  { id: "your-visits", title: "Your Visits" },
  { id: "insurance-payments", title: "Insurance & Payments" },
];

export const FAQ = () => {
  return (
    <section className="faq-page" aria-labelledby="faq-heading">
      <div className="faq-page__inner">
        <header className="faq-page__intro">
          <p className="block-subtitle">Good to know</p>
          <h1 id="faq-heading">Frequently Asked Questions</h1>
          <p className="faq-page__description">
            From your first visit to payment options, here's what to know before
            getting started.
          </p>
          <nav className="faq-page__topics" aria-label="FAQ topics">
            {categories.map((category) => (
              <a href={`#faq-${category.id}`} key={category.id}>
                {category.title}<span aria-hidden="true">{"\u2197"}</span>
              </a>
            ))}
          </nav>
        </header>
        <div className="faq-page__questions">
          {categories.map((category) => (
            <section
              className="faq-group"
              id={`faq-${category.id}`}
              aria-labelledby={`faq-${category.id}-heading`}
              key={category.id}
            >
              <h2 id={`faq-${category.id}-heading`}>{category.title}</h2>
              {FAQData.filter((item) => item.category === category.id).map((item) => (
                <details className="faq-question" key={item.question} open={item === FAQData[0]}>
                  <summary>
                    <h3>{item.question}</h3>
                    <span className="faq-question__toggle" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5v14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="faq-question__answer">{item.answer}</p>
                </details>
              ))}
            </section>
          ))}
        </div>
      </div>
    </section>
  )
};
