// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div
        className="
          backdrop-blur-lg 
          bg-[#0f172a]/70 
          border border-[#1f223c] 
          rounded-full 
          px-4 sm:px-6 
          py-3
          shadow-[0_0_25px_rgba(139,92,246,0.15)]
          w-fit
          max-w-[95%]
        "
      >
        <ul className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-white text-center">

          <li>
            <Link href="/#about" className="nav-link">
              ABOUT
            </Link>
          </li>

          <li>
            <Link href="/#experience" className="nav-link">
              EXPERIENCE
            </Link>
          </li>

          <li>
            <Link href="/#skills" className="nav-link">
              SKILLS
            </Link>
          </li>

          <li>
            <Link href="/#education" className="nav-link">
              EDUCATION
            </Link>
          </li>

          <li>
            <Link href="/#projects" className="nav-link">
              PROJECTS
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;