// import Menu from "./Menu";
import { useState } from "react";
import Logo from "./Logo";

import { Link } from "react-router-dom";

export default function Nav() {
  const [toggleNav, setToggleNav] = useState(false);

  const LinkStyles =
    " no-underline block px-4 py-2 sm:text-base lg:text-lg lg:px-8 xl:text-2xl text-white hover:bg-[#5C9703] transition duration-300 ease-in-out";

  const NavList = (
    <ul className="list-none flex flex-col md:flex-row bg-[#9aef501e] justify-between  text-base md:bg-transparent">
      <li>
        <Link to="/" className={LinkStyles}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/Games" className={LinkStyles}>
          Games
        </Link>
      </li>
      {/* <li>
        <Link to="/dashboard" className={LinkStyles}>
          Dashboard
        </Link>
      </li> */}
      <li>
        <Link to="/Signup" className={LinkStyles}>
          Sign up
        </Link>
      </li>
      <li>
        <Link to="/Log-in" className={LinkStyles}>
          Log in
        </Link>
      </li>
    </ul>
  );

  function handleClick() {
    setToggleNav((prev) => !prev);
  }

  return (
    <header className="w-[100vw] bg-black border-b-1 fixed z-[2] border-b-white ">
      <nav className="flex justify-between items-center px-7 md:px-8 py-[10px] text-lg min-h-[40px]">
        <Logo width="100px" text="1.5rem" imgWidth="40px" imgHeight="40px" />

        <button className="md:hidden text-white text-xl" onClick={handleClick}>
          {toggleNav ? "Close" : "Menu"}
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex">{NavList}</div>
      </nav>

      {/* Mobile nav */}
      {toggleNav && (
        <div className="block top-[100%] z-[2] left-0 w-full border-t-1 border-t-white border-r-1 border-r-[white] bg-black md:hidden">
          {NavList}
        </div>
      )}
    </header>
  );
}
