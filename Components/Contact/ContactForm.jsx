"use client";
import InputControl from "./InputControl";
import { ErrorMessage, PrimaryButton } from "../Common";
import { useState } from "react";
import { contactValidationSchema } from "../utils/schema";
import { Toaster, toast } from "react-hot-toast";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      await contactValidationSchema?.validate(data, { abortEarly: false });
      setLoading(true);

      // Build mailto link and open it
      const mailtoLink = `mailto:prabhatkaran47@gmail.com?subject=${encodeURIComponent(
        data.subject || "Portfolio Contact"
      )}&body=${encodeURIComponent(
        `Hi Karan,\n\nName: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
      )}`;

      window.open(mailtoLink, "_blank");

      toast.success("Opening your email client...", {
        style: { background: "#282C33", color: "#fff", border: "1px solid #C778DD" },
      });

      setData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      const validationErrors = {};
      error?.inner?.forEach((err) => {
        validationErrors[err?.path] = err.message;
      });
      setErrors(validationErrors);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={sendMessage} className="w-full flex flex-col gap-3">
      <Toaster position="top-right" />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="w-full flex flex-col gap-1">
          <InputControl
            value={data.name}
            name="name"
            placeholder="Your name"
            type="text"
            onChange={handleChange}
          />
          {errors?.name && <ErrorMessage message={errors?.name} />}
        </div>
        <div className="w-full flex flex-col gap-1">
          <InputControl
            value={data.email}
            name="email"
            placeholder="Your email"
            type="email"
            onChange={handleChange}
          />
          {errors?.email && <ErrorMessage message={errors?.email} />}
        </div>
      </div>

      <div className="w-full flex flex-col gap-1">
        <InputControl
          value={data.subject}
          name="subject"
          placeholder="Subject"
          type="text"
          onChange={handleChange}
        />
        {errors?.subject && <ErrorMessage message={errors?.subject} />}
      </div>

      <div className="w-full flex flex-col gap-1">
        <textarea
          value={data.message}
          name="message"
          rows="5"
          placeholder="Your message..."
          className="border w-full border-gray p-[0.7rem] text-gray text-[1rem] outline-none bg-transparent hover:border-primary focus:border-primary transition-all duration-200 resize-none"
          onChange={handleChange}
        />
        {errors?.message && <ErrorMessage message={errors?.message} />}
      </div>

      <PrimaryButton
        type="submit"
        disabled={loading}
        childClass="w-full text-white bg-light_primary border border-gray hover:border-primary hover:bg-primary transition-all duration-200 disabled:opacity-50"
        text={loading ? "Opening..." : "Send Message →"}
      />
    </form>
  );
};

export default ContactForm;
