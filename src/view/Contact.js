import React from "react";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import FeedbackForm from "../components/feedbackForm";

const Contact = () => {
  return (
    <div>
      <ContactForm />
      <FeedbackForm />
      <FAQ />
    </div>
  );
};

export default Contact;
