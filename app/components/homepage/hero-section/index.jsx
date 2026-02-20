// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram, FaTelegram, FaEnvelope } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section
      className="
        relative 
        flex items-center justify-center 
        min-h-screen 
        pt-28 pb-16
        lg:pt-32
      "
    >
      {/* Background */}
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[100px] -z-40"
        priority
      />

      <div className="grid lg:grid-cols-2 gap-12 w-full max-w-6xl px-6 items-center">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6 z-20">

          <h1 className="leading-tight">
            <span className="block text-sm uppercase tracking-[0.35em] text-gray-400 mb-1">
              The
            </span>

            <span className="block text-pink-500 text-[2.3rem] lg:text-[3rem] font-extrabold leading-none">
              Best Digital Marketer
            </span>

            <span className="block text-[#16f2b3] text-lg lg:text-xl mt-1 tracking-wider">
              in Madurai
            </span>
          </h1>

          <h2 className="hero-subtitle mt-4">
            Hemanth&apos;s Portfolio
          </h2>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            <Link href={`mailto:${personalData.email}`} className="social-btn">
              <FaEnvelope size={18} />
            </Link>

            <Link href={personalData.linkedIn} className="social-btn">
              <BsLinkedin size={18} />
            </Link>

            <Link href={personalData.instagram} className="social-btn">
              <FaInstagram size={18} />
            </Link>

            <Link href={personalData.telegram} className="social-btn">
              <FaTelegram size={18} />
            </Link>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">

            <Link
              href="#contact"
              className="btn btn-primary"
            >
              <RiContactsFill size={18} />
              Contact Me
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              className="btn btn-secondary"
            >
              <MdDownload size={18} />
              Get Resume
            </Link>

          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="neon-card p-8 text-white">

          <h2 className="text-white text-xl font-semibold mb-3 text-center">
            As a Digital Marketer, I specialize in
          </h2>

          <p className="text-gray-200 font-medium mb-6 text-center">
            SEO • SMM • AI-Assisted SEO Content Writing • Paid Ads
          </p>

          {/* SKILL GRID */}
          <div className="grid grid-cols-2 gap-4">

            {[
              "On-Page SEO",
              "Off-Page SEO",
              "Technical SEO",
              "SEO Auditing",
              "Keyword Research",
              "Competitor Analysis",
              "Google Ads",
              "Meta Ads",
              "X Ads",
              "Web3 Ads",
            ].map((skill, i) => (
              <div
                key={i}
                className="
                  bg-[#141a35]
                  border border-[#2a2f55]
                  text-white
                  px-4 py-2
                  rounded-full
                  text-sm
                  font-medium
                  text-center
                  hover:border-violet-500
                  hover:scale-105
                  transition-all duration-300
                "
              >
                {skill}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;