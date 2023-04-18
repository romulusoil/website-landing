import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Avatar } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { saket,saransh } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,

        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Romulus",
          from_email: form.email,
          from_phone: form.phone,
          to_email: "tech@romulusoil.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
            phone: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex flex-col lg:flex-row gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="p-8 rounded-lg bg-[#202020] w-full"
      >
        {/* <p className={styles.sectionSubText}>Get in touch</p> */}
        <h3 style={{ color: "#ececec" }} className={styles.sectionHeadText}>
          Contact Us.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col gap-2"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium">Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              style={{ borderWidth: "2px", borderColor: "black" }}
              className="py-2 px-6 placeholder:text-secondary text-black rounded bg-[#c2c2c2] font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium">Email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              style={{ borderWidth: "2px", borderColor: "black" }}
              className="py-2 px-6 placeholder:text-secondary text-black rounded bg-[#c2c2c2] font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-1">Phone Number</span>
            <input
              name="phone"
              type="number"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone no."
              style={{ borderWidth: "2px", borderColor: "black" }}
              className="py-2 px-6 placeholder:text-secondary text-black rounded bg-[#c2c2c2] font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Message</span>
            <textarea
              rows={4}
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              style={{ borderWidth: "2px", borderColor: "black" }}
              className="py-2 px-6 placeholder:text-secondary text-black rounded bg-[#c2c2c2] font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-[#c2c2c2] py-3 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <div className="text-black rounded-lg w-full flex flex-col gap-3 items-center justify-evenly lg:pl-20">
        <div>
          <h1
            style={{ color: "#191919" }}
            className="text-[1.6rem] lg:text-[2.7rem] font-bold pb-2"
          >
            Founding Partners
          </h1>
          <div className="flex flex-row gap-10 items-center mt-2 justify-center">
            <div className="flex flex-col items-center">
              <Avatar src={saransh} sx={{ width: "6rem", height: "6rem" }} />
              <span className="font-bold lg:text-[1.2rem]">Saransh Tiku</span>
              {/* <span>CEO</span> */}
            </div>

            <div className="flex flex-col items-center">
              <Avatar src={saket} sx={{ width: "6rem", height: "6rem" }} />
              <span className="font-bold lg:text-[1.2rem]">Saket Tiku</span>
              {/* <span>CEO</span> */}
            </div>
          </div>
        </div>

        <div className="py-10">
          <h1
            style={{ color: "#191919" }}
            className="text-center text-[1.6rem] lg:text-[2.7rem] font-bold"
          >
            Contact Info
          </h1>
          <div className="flex flex-col items center mt-1 gap-3">
            <span className="lg:text-[1.3rem]">
              <span className="font-bold ">
                {" "}
                <EmailIcon /> Email
              </span>{" "}
              : sales@romulusoil.com{" "}
            </span>
            <span className="lg:text-[1.3rem]">
              <span className="font-bold">
                {" "}
                <LocalPhoneIcon /> Contact No
              </span>{" "}
              : +91 75069 87897
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
