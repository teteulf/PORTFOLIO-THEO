"use client";

import emailjs from "@emailjs/browser";
import { useLayoutEffect, useRef } from "react";
import { useTransition } from "../context/transitionContext";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3ha9b8a",
        "template_phsd5xj",
        form.current,
        "aekpOZesbDOJROeGm"
      )
      .then(
        (response) => {
          console.log("Email Enviado", response.status, response.text);
          e.target.reset();
          alert("email sent succesfully");
        },
        (err) => {
          console.log("ERROR", err);
        }
      );
  }

  const { setIsOpen } = useTransition();
  useLayoutEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <section className="h-full w-full flex flex-col items-center justify-center gap-8">
        <motion.h1
          className="text-[40px] text-white"
          initial={{ y: "-150%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
        >
          Lets <strong className="text-red-600">Connect</strong>
        </motion.h1>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className=" flex flex-col gap-4 md:gap-8 w-[90%] sm:w-[600px] text-white text-opacity-40"
          initial={{ y: "150%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0, duration: 2 }}
        >
          <div className="flex w-full gap-x-6">
            <input
              className="border-[1px] pl-[10px] rounded-[8px] border-solid border-slate-500 border-opacity-70 focus:border-red-600 transition-color duration-500 w-full h-[35px]"
              type="text"
              id="to_name"
              name="to_name"
              placeholder="Name"
              required
            ></input>
            <input
              className="border-[1px] pl-[10px] rounded-[8px] border-solid border-slate-500 border-opacity-70 focus:border-red-600 transition-color duration-500 w-full h-[35px]"
              type="email"
              name="from_name"
              id="from_name"
              placeholder="Email"
              required
            ></input>
          </div>
          <input
            className="border-[1px] pl-[10px] rounded-[8px] border-solid border-slate-500 border-opacity-70 focus:border-red-600 transition-color duration-500 h-[35px]"
            type="text"
            name="subject"
            id="from_subject"
            placeholder="Subject"
            required
          ></input>
          <textarea
            className="border-[1px] pl-[10px] pt-[5px] rounded-[8px] border-solid border-slate-500 border-opacity-70 focus:border-red-600 transition-color duration-500 h-[150px] "
            name="message"
            id="from_message"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            className="flex ml-0 rounded-full border-solid border-[1px] border-white w-[150px] h-[50px] items-center justify-center text-white "
            type="submit"
          >
            Enviar
          </button>
        </motion.form>
      </section>
    </>
  );
}
