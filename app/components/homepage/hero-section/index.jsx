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
    <section className="relative flex items-center justify-center min-h-screen py-6 lg:py-14">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[100px] -z-40"
        priority
      />

      <div className="grid lg:grid-cols-2 gap-10 w-full max-w-6xl px-4 items-center">

        {/* LEFT */}
        <div className="flex flex-col gap-6 z-20">

          <h1 className="hero-title text-[#16f2b3] leading-tight">
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

<h2 className="hero-subtitle mt-4 text-center lg:text-left">
  Hemanth&apos;s Portfolio
</h2>



          {/* SOCIAL ICONS */}
          <div className="flex gap-5 text-pink-500">
            <Link href={`mailto:${personalData.email}`}><FaEnvelope className="icon-glow" size={26} /></Link>
            <Link href={personalData.linkedIn}><BsLinkedin className="icon-glow" size={26} /></Link>
            <Link href={personalData.instagram}><FaInstagram className="icon-glow" size={26} /></Link>
            <Link href={personalData.telegram}><FaTelegram className="icon-glow" size={26} /></Link>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <Link href="#contact" className="btn-primary">
              Contact Me <RiContactsFill />
            </Link>

            <Link href={personalData.resume} target="_blank" className="btn-secondary">
              Get Resume <MdDownload />
            </Link>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="hero-card">
          <h2>As a Digital Marketer, I specialize in</h2>
          <p>SEO • SMM • AI-Assisted SEO Content Writing • Paid Ads</p>

          <div className="hero-skills">
            <span>On-Page SEO</span> 
            <span>Off-Page SEO</span> 
            <span>Technical SEO</span>
            <span>SEO Auditing</span>
            <span>Keyword Research</span>
            <span>Competitor Analysis</span>
            <span>Google Ads</span>
            <span>Meta Ads</span>
            <span>X Ads</span>
            <span>Web3 Ads</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
