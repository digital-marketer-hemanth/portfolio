"use client";
// @flow strict
import { isValidEmail } from '@/utils/check-email';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify'; 
import { EMAILJS_CONFIG } from "@/utils/emailjs-config";

function ContactWithCaptcha() {
  const [input, setInput] = useState({ name: '', email: '', message: '' });
  const [captcha, setCaptcha] = useState(null);
  const [error, setError] = useState({ email: false, required: false });

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!captcha) {
      toast.error("Please complete the captcha!");
      return;
    }

    if (!input.name || !input.email || !input.message) {
      setError({ ...error, required: true });
      return;
    }

    if (!isValidEmail(input.email)) {
      setError({ ...error, email: true });
      return;
    }

    setError({ email: false, required: false });

    try {
      const res = await emailjs.send(
        EMAILJS_CONFIG.SERVICE,
        EMAILJS_CONFIG.TEMPLATE,
        {
          from_name: input.name,
          from_email: input.email,
          message: input.message,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setInput({ name: '', email: '', message: '' });
        setCaptcha(null);
      }
    } catch (err) {
      console.log("EMAILJS ERROR:", err);
      toast.error(err?.text || err?.message || "Failed to send message");
    }
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact with me
      </p>

      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          If you have any questions or concerns, please don&apos;t hesitate to contact me.
          I am open to any work opportunities that align with my skills and interests.
        </p>

        <div className="mt-6 flex flex-col gap-4">
          <input
            className="bg-[#10172d] border rounded-md px-3 py-2"
            placeholder="Your Name"
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            onBlur={checkRequired}
          />

          <input
            className="bg-[#10172d] border rounded-md px-3 py-2"
            placeholder="Your Email"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            onBlur={() => setError({ ...error, email: !isValidEmail(input.email) })}
          />

          {error.email && (
            <p className="text-sm text-red-400">Please provide a valid email!</p>
          )}

          <textarea
            className="bg-[#10172d] border rounded-md px-3 py-2"
            rows="4"
            placeholder="Your Message"
            value={input.message}
            onChange={(e) => setInput({ ...input, message: e.target.value })}
            onBlur={checkRequired}
          />

          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={(value) => setCaptcha(value)}
          />

          {error.required && (
            <p className="text-sm text-red-400">All fields are required!</p>
          )}

          <button
            onClick={handleSendMail}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-8 py-3 text-sm font-semibold uppercase text-white"
          >
            Send Message <TbMailForward size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactWithCaptcha;
