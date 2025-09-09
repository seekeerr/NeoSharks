import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-banner-seven p-30">
      <div className="bg-wrapper position-relative pt-200 pb-20 md-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7" data-aos="fade-right">
              <div
                className="slogan d-inline-block"
              >
                Future-Ready Apps
              </div>
              <h1 className="hero-heading fw-bold tx-dark mt-25">
                Turn Your   
               <span className="position-relative ms-3 d-inline-block" style={{ marginRight: "0.4em" }}>
  Ideas <img src="/images/shape/shape_95.svg" style={{width:"400px", height:"120px"}} alt="shape" />
</span>
             Into Powerful Web Apps.
              </h1>
              <p className="text-lg mb-70 pt-35 pe-xxl-5 md-pt-30 lg-mb-40">
                Our expert team designs and develops innovative apps that combine speed, security, and seamless user experience.
              </p>
              <Link
                href="/pages-menu/pricing"
                className="btn-fourteen fw-500 tran3s"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
          {/* End .container */}

          {/* <div className="illustration-holder" data-aos="fade-left">
            <img
              src="/images/assets/sharkshero.png"
              alt="illustration"
              className="lazy-img main-illustration"
            />
          </div> */}
          {/* /.illustration-holder */}
        </div>
        {/* /.container */}
      </div>
    </div>
  );
};

export default Hero;
