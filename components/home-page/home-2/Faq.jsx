const Faq = () => {
  const faqData = [
     {
       question: "How soon can we go live with a new website?",
       answer:
         "Typical timelines range from 4 to 6 weeks depending on features and complexity. For urgent projects, we offer fast-track launch options without compromising quality.",
     },
     {
       question: "Will my website be SEO-optimized?",
       answer:
         "Yes. All websites are built with SEO best practices such as server-side rendering, schema markups, mobile responsiveness, and fast-loading pages to maximize visibility.",
     },
     {
       question: "Does NeoSharks provide scalable solutions for future growth?",
       answer:
         "Yes. Our solutions are designed with scalability in mind. Using AWS, SQL, and MongoDB, we ensure your system can grow as your traffic, data, and business needs expand.",
     },
     {
       question: "How does NeoSharks handle communication and project updates?",
       answer:
         "We maintain transparent communication with weekly or bi-weekly updates. Clients have direct access to progress reports, sprint reviews, and feedback loops throughout the project.",
     },
     {
       question: "Can NeoSharks integrate AI or automation into my project?",
       answer:
         "Yes. We use OpenAI and automation frameworks to build features like chatbots, content generation, workflow automation, and analytics. These solutions are tailored to business goals.",
     },
     {
       question: "What kind of post-launch support do you offer?",
       answer:
         "We provide ongoing support including maintenance, security updates, performance audits, SEO monitoring, and feature enhancements to keep your application running smoothly.",
     },
   ];
  return (
    <div className="accordion accordion-style-two" id="accordionOne">
      {faqData.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
