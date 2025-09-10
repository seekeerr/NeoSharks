import Link from "next/link";
import React from "react";

const CallToActions = () => {
  return (
    <div
      className="fancy-short-banner-ten position-relative mt-225 lg-mt-100"
      data-aos="fade-up"
    >
      <div className="container"       id="our-careers"
>
        <div className="bg-wrapper position-relative pt-50 pb-65 lg-pt-40 lg-pb-50">
          <div className="row">
            <div className="col-lg-11 m-auto">
              <div className="row align-items-center">
              <h4 className="m0 text-white fw-bold md-pb-20">
                    Looking for a proffession in web developement? Drop your resume at careers@neosharks.in
                  </h4>
                {/* End .col-6 */}

                {/* <div className="col-xl-6 col-lg-7">
                  <div className="d-sm-flex align-items-center justify-content-center justify-content-lg-end">
                    <Link
                      href="/contact/contact-v3"
                      className="btn-line fw-500 tran3s position-relative me-sm-5"
                    >
                      Chat with a an Expert
                    </Link>
                    <Link
                      href="/contact/contact-v3"
                      className="btn-solid fw-500 tran3s"
                    >
                      Get Started
                    </Link>
                  </div>
                </div> */}
                {/* End .col-6 */}
              </div>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
    </div>
  );
};

export default CallToActions;
