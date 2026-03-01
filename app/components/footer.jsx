// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t border-[#353951] bg-[#0d1224] text-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">

    {/* Subtle top glow line */}
    <div className="flex justify-center">
      <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
      <p className="text-sm">
        © Digital Marketer Portfolio of{" "}
        <Link
          target="_blank"
          href="https://in.linkedin.com/in/hemanth-j-662a9b234"
          className="text-[#16f2b3] hover:underline"
        >
          Hemanth J
        </Link>
      </p>
    </div>

  </div>
</div>
  );
};

export default Footer;