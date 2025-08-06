"use client";

import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import JobApplicationForm from "../components/JobApply";

const Contact = () => {
  return (
    <div className="font-arca relative">
      <section className="ABOUT-HEROSECTION w-full h-max xl:h-max  ">
        <div className="absolute w-full h-full ">
          <img
            src="/assets/contact.jpg"
            alt=""
            className="w-full scale-120 h-full max-xl:object-cover  xl:h-[50dvh]  absolute"
          />
        </div>
        <div className="container py-40 mx-auto max-w-7xl relative z-[10] flex md:px-20 px-10  items-center gap-20  justify-center w-full h-full">
          <JobApplicationForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;
