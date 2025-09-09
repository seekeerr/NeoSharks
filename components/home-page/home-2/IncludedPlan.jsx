const cards = [
  {
    id: 1,
    icon: "/images/icon/uiux.svg",
    title: "UI/UX Design & Frontend ",
    description: "Beautiful, responsive, and user-friendly UI with modern frontend frameworks.",
    delayAnim: "100",
  },
  {
    id: 2,
    icon: "/images/icon/backend.svg",
    title: "Backend Development",
    description: "Robust, secure, and scalable backend systems tailored to your needs.",
    delayAnim: "200",
  },
  {
    id: 3,
    icon: "/images/icon/mobile.svg",
    title: "Mobile App Development",
    description: "Native and cross-platform apps built with performance in mind.",
    delayAnim: "300",
  },
  {
    id: 4,
    icon: "/images/icon/cloud.svg",
    title: "Cloud & DevOps",
    description: "Seamless deployment, CI/CD pipelines, and cloud scalability.",
    delayAnim: "100",
  },
  {
    id: 5,
    icon: "/images/icon/testing.svg",
    title: "QA & Testing",
    description: "Manual and automated testing for flawless performance.",
    delayAnim: "200",
  },
  {
    id: 6,
    icon: "/images/icon/support.svg",
    title: "Maintenance & Support",
    description: "Continuous monitoring, updates, and 24/7 technical support.",
    delayAnim: "300",
  },
];



const IncludedPlan = () => {
  return (
    <>
      {cards.map((card) => (
      <div
  className="col-lg-4 col-sm-6 d-flex justify-content-center align-items-start"
  key={card.id}
  data-aos="fade-up"
  data-aos-delay={card.delayAnim}
>
<div
  className="card-style-eleven text-center text-lg-start w-100 mt-110 lg-mt-50 xs-mt-40"
  style={{ maxWidth: "320px" }} // optional: keep cards consistent
>
  <div
    className="icon d-flex align-items-center justify-content-center position-relative rounded-circle"
    style={{
      width: "80px",     // circle size
      height: "80px",
      background: "#FFD700", // background for visibility
      overflow: "hidden", // ✅ ensures image never spills out
    }}
  >
    <img
      src={card.icon}
      alt="illustration"
      className="lazy-img"
      style={{
        width: "50%",   // ✅ shrink image to fit
        height: "50%",
        objectFit: "contain", // ✅ keeps proportions
      }}
    />
  </div>

  <h4 className="mt-30 mb-20 lg-mb-10">{card.title}</h4>
  <p>{card.description}</p>
</div>

          {/* /.card-style-eleven */}
        </div>
      ))}
    </>
  );
};

export default IncludedPlan;
