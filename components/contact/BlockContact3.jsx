import Image from "next/image";
import React from "react";

const contactBlocks = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_173.svg",
    title: "Write us a message",
    text: "Write your message, our team will reach you.",
    buttonLabel: "write a message",
    link: "#contact-form"
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_174.svg",
    title: "Drop us a mail",
    text: "Write your mail @",
    buttonLabel: "contact@neosharks.in",
    link:"mailto:contact@neosharks.in"
  },
];

const BlockContact3 = () => {
  return (
    <>
      {contactBlocks.map((block) => (
        <div className="col-lg-5 col-md-6" key={block.id}>
          <div
            className="address-block-four text-center me-xxl-4 ms-xxl-4 mt-30"
            data-aos="fade-up"
          >
            <div className="icon d-flex align-items-end justify-content-center">
              <Image
                width={40}
                height={40}
                src={block.iconSrc}
                alt="shape"
                className="mh-100"
              />
            </div>
            <div className="text">
              <h5 className="title tx-dark mt-25 mb-10">{block.title}</h5>
              <p className="fs-18 mb-35">{block.text}</p>
              <a
               href={block.link}
                className="btn-twentySix fs-18 fw-500 tran3s position-relative"
              >
                {block.buttonLabel}
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact3;
