import React from "react";
import { SectionHeading } from "../Common";
import ContactForm from "./ContactForm";
import Message from "./Message";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-full pt-24" id="contact">
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
      className="w-full"
     
    >
      <div className="container flex flex-col gap-[2rem] " >
        <SectionHeading isLine={true} icon="#" heading="contact" />

        <div className="w-full grid lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-[1.5rem]">
            <p className="description">
              I&apos;m actively looking for AI/ML engineering and data science
              opportunities. Whether you have a role, a project, or just want to
              connect — I&apos;d love to hear from you.
            </p>
            <Message />
          </div>

          <div className="w-full">
            <div className="w-full flex flex-col gap-4 border border-gray p-4 lg:p-5 bg-dark">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </div>
  );
};

export default Contact;
