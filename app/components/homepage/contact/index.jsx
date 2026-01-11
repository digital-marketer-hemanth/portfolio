// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import ContactWithCaptcha from './contact-with-captcha';
import ContactWithoutCaptcha from './contact-without-captcha';

// Hero-style icons
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram, FaTelegram, FaEnvelope } from "react-icons/fa";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">

      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY)
          ? <ContactWithCaptcha />
          : <ContactWithoutCaptcha />
        }

        <div className="lg:w-3/4">
          <div className="flex flex-col gap-5 lg:gap-9">

            <p className="text-sm md:text-xl flex items-center gap-3">
              <FaEnvelope className="text-pink-500 hover:scale-110 transition-all duration-300" size={32} />
              <span>{personalData.email}</span>
            </p>

            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall className="text-pink-500 hover:scale-110 transition-all duration-300" size={32} />
              <span>{personalData.phone}</span>
            </p>

            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn className="text-pink-500 hover:scale-110 transition-all duration-300" size={32} />
              <span>{personalData.address}</span>
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-8 lg:mt-16 flex items-center gap-6">
            <Link href={`mailto:${personalData.email}`} className="text-pink-500 hover:scale-125 transition">
              <FaEnvelope size={30} />
            </Link>

            <Link href={personalData.linkedIn} target="_blank" className="text-pink-500 hover:scale-125 transition">
              <BsLinkedin size={30} />
            </Link>

            <Link href={personalData.instagram} target="_blank" className="text-pink-500 hover:scale-125 transition">
              <FaInstagram size={30} />
            </Link>

            <Link href={personalData.telegram} target="_blank" className="text-pink-500 hover:scale-125 transition">
              <FaTelegram size={30} />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactSection;
  