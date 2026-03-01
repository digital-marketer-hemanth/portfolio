// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl">
      <div className="navbar-glow backdrop-blur-xl bg-[#0d1224]/80 border border-[#1f223c] rounded-full shadow-lg px-4 py-3">

        <ul className="
          grid 
          grid-cols-3 
          gap-y-2 
          text-center 
          text-xs 
          font-medium 
          text-white
          md:flex 
          md:justify-center 
          md:space-x-6 
          md:text-sm
        ">

          {/* First Row */}
          <li>
            <Link className="nav-link block py-1" href="/#about">
              ABOUT
            </Link>
          </li>

          <li>
            <Link className="nav-link block py-1" href="/#experience">
              EXPERIENCE
            </Link>
          </li>

          <li>
            <Link className="nav-link block py-1" href="/#skills">
              TOOLS
            </Link>
          </li>

          {/* Second Row - Centered */}
          <li className="col-span-3 flex justify-center gap-8 md:col-auto md:flex-none">
            <Link className="nav-link py-1" href="/#education">
              EDUCATION
            </Link>

            <Link className="nav-link py-1" href="/#projects">
              PROJECTS
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;