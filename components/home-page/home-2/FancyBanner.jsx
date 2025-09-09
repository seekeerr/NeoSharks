import Link from "next/link";

const FancyBanner = () => {
  const bannerData = [
    {
    
      mainTitle: "How to Integrate AI in Web App ",
      description:
        "Artificial intelligence is changing the way web applications work, making them smarter, more responsive, and better at engaging users. Thanks to cloud platforms, AI tools are now more easily accessible. Developers are rapidly incorporating advanced features to enhance user experience and streamline operations.",
      buttonLabel: "Read More",
      illustration: "/images/assets/ils_06.png",
      illustrationAlt: "illustration",
      illustrationPosition: "right",
      aos: "fade-right",
      link:"https://trangotech.com/blog/how-to-integrate-ai-in-web-app/"
    },
    {
      mainTitle: "Why is MERN the Ideal Choice for Modern Startup Apps?",
      description:
        "In the fast-paced world of startups, choosing the right development stack is crucial for success. Enter the MERN stack (MongoDB, Express.js, React.js, and Node.js) — a powerful combination that offers a compelling solution for building modern web applications. Why is MERN the first choice for startups? Let’s dive in:",
      buttonLabel: "Read More",
      illustration: "/images/assets/ils_07.png",
      illustrationAlt: "illustration",
      illustrationPosition: "left",
      aos: "fade-left",
      link:"https://javascript.plainenglish.io/why-is-mern-the-ideal-choice-for-modern-startup-apps-f770b6c48ca0"
    },
  ];

  return (
    <div className="fancy-feature-twentyFour mt-225 lg-mt-130">
      <div className="container">
        {bannerData.map((data, index) => (
          <div className="block-style-four mt-200 lg-mt-100" key={index}>
            <div className="row align-items-center">
              <div
                className={`col-xl-5 col-lg-6 order-lg-${
                  data.illustrationPosition === "left" ? "first" : "last"
                }`}
                data-aos={data.aos}
              >
                <div className="title-style-eight">
                  <div className="sc-title text-uppercase">{data.title}</div>
                  <h2 className="main-title tx-dark fw-bold">
                    {data.mainTitle}
                  </h2>
                </div>
                <p className="fs-20 lh-lg mt-35 lg-mt-20">{data.description}</p>
                {data.buttonLabel !== "" && (
                  <Link
                    href={data.link}
                    className="btn-fifteen fw-500 position-relative d-inline-flex align-items-center"
                    target="_blank" 
                  >
                    <span >{data.buttonLabel}</span>
                    <img
                      src="/images/icon/icon_69.svg"
                      alt={data.illustrationAlt}
                      className="ms-2"
                    />
                  </Link>
                )}
              </div>
              <div
                className={`col-xl-7 col-lg-6 col-md-8 m-auto order-lg-${
                  data.illustrationPosition === "left" ? "last" : "first"
                }`}
                data-aos={data.aos}
              >
                <div className="illustration-holder md-mt-60">
                  <img
                    src={data.illustration}
                    alt={data.illustrationAlt}
                    className="lazy-img"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FancyBanner;
