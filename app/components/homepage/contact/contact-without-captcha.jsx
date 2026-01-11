"use client";
// @flow strict
import { isValidEmail } from '@/utils/check-email';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify'; 
import { EMAILJS_CONFIG } from "@/utils/emailjs-config";


function ContactWithoutCaptcha() {
  const [error, setError] = useState({ email: false, required: false });
  const [userInput, setUserInput] = useState({ name: '', email: '', message: '' });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
  e.preventDefault();

  // Reset previous errors
  setError({ email: false, required: false });

  if (!userInput.name || !userInput.email || !userInput.message) {
    setError({ email: false, required: true });
    return;
  }

  if (!isValidEmail(userInput.email)) {
    setError({ email: true, required: false });
    return;
  }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      const res = await emailjs.send(
  EMAILJS_CONFIG.SERVICE,
  EMAILJS_CONFIG.TEMPLATE,
  {
    from_name: userInput.name,
    from_email: userInput.email,
    message: userInput.message,
  },
  EMAILJS_CONFIG.PUBLIC_KEY
);

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setUserInput({ name: '', email: '', message: '' });
      }
    } catch (err) {
  console.log("EMAILJS ERROR:", err);
  toast.error(err?.text || err?.message || "Failed to send message");    }
  };

  return (
    <div className="">
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contact with me</p>

      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.
        </p>

        <div className="mt-6 flex flex-col gap-4">

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] outline-none px-3 py-2"
              value={userInput.name}
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] outline-none px-3 py-2"
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => setError({ ...error, email: !isValidEmail(userInput.email) })}
            />
            {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message: </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] outline-none px-3 py-2"
              rows="4"
              value={userInput.message}
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
            />
          </div>

          <div className="flex flex-col items-center gap-2">
            {error.required && <p className="text-sm text-red-400">All fields are required!</p>}
            <button onClick={handleSendMail}
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-xs md:text-sm font-semibold uppercase text-white">
              Send Message <TbMailForward size={18}/>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactWithoutCaptcha;
