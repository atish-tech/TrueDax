"use client";

import { CircleAlert, Mail, Pen, Send, User } from "lucide-react";
import { useState } from "react";
import { SendEmailToAdmin, SendEmailToUser } from "./sendEmail";
import axios from "axios";

export const ContactUs = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    companyName: "",
    message: "",
  });

  const onInputChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendMessage = async () => {
    try {
      // API end point for sending email
      await axios.post("/api/email", data);

      data.email = "";
      data.companyName = "";
      data.message = "";
      data.name = "";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="contact-us"
      className="flex w-full md:flex-row flex-col items-center justify-around py-20"
    >
      <div className="w-full md:p-32 p-5">
        <p className="font-bold text-xl">CONTACT US</p>
        <p className="text-[50px] font-bold">Let's Talk!</p>
        <p className="text-lg text-zinc-400">
          we will reach out to you within 24 hours
        </p>
        <p className="text-xl font-semibold mt-6 text-zinc-600">
          {" "}
          Don't like filling up forms? Email us directly at-
        </p>
        <p className="flex items-center gap-5 mt-2">
          {" "}
          <Mail className="text-green-500" /> <span> hr@truedax.io </span>
        </p>
      </div>

      <div className="flex flex-col gap-5 w-full md:p-32 p-5">
        {/* Name */}
        <div>
          <div className="flex gap-3 items-center">
            <User className="text-zinc-400" />
            <input
              value={data.name}
              onChange={onInputChange}
              placeholder="Name"
              name="name"
              className="p-3 border-none focus:border-none focus:outline-none"
            />
          </div>
          <hr className="h-[2px] bg-zinc-300" />
        </div>

        {/* Email */}
        <div>
          <div className="flex gap-3 items-center">
            <Mail className="text-zinc-400" />
            <input
              value={data.email}
              onChange={onInputChange}
              name="email"
              placeholder="Email Address"
              className="p-3 border-none focus:border-none focus:outline-none"
            />
          </div>
          <hr className="h-[2px] bg-zinc-300" />
        </div>

        {/* Company Name */}
        <div>
          <div className="flex gap-3 items-center">
            <CircleAlert className="text-zinc-400" />
            <input
              value={data.companyName}
              onChange={onInputChange}
              name="companyName"
              placeholder="Company Name"
              className="p-3 border-none focus:border-none focus:outline-none"
            />
          </div>
          <hr className="h-[2px] bg-zinc-300" />
        </div>

        {/* Message */}
        <div className="w-full">
          <div className="flex w-full gap-3 items-center">
            <Pen className="text-zinc-400" />
            <input
              value={data.message}
              onChange={onInputChange}
              name="message"
              placeholder="How can we help you? Fell free to get in touch!"
              className="p-3 w-full border-none focus:border-none focus:outline-none"
            />
          </div>
          <hr className="h-[2px] bg-zinc-300" />
        </div>

        {/* Send Message */}
        <button
          onClick={sendMessage}
          className="w-fit flex items-center gap-3 px-10 py-4 bg-green-500 rounded-full text-white"
        >
          {" "}
          <Send /> Get In Touch{" "}
        </button>
      </div>
    </div>
  );
};
