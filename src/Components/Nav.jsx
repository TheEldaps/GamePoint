// import Menu from "./Menu";
import Logo from "./Logo";

import { Link } from "react-router-dom";

export default function Nav() {
  // state variable tor togglig the menu bar

  let LinkStyles =
    "no-underline block px-[2rem] py-[10px] text-[1.6rem] text-[#ffffff] hover:bg-[#5C9703] transition duration-300 ease-in-out";
  return (
    <header className="  text-[#ffffff] bg-black border-gray-800 border-b-[2px]">
      <nav className="flex justify-between items-center  px-[50px] text-[20px] min-h-[40px]">
        <Logo className="w-[500px]" />

        <ul className="list-none flex justify-between min-w-[800px] text-[1.5rem]">
          <li>
            <Link to="/dashboard" className={`${LinkStyles}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/tournaments" className={`${LinkStyles}`}>
              Tournament
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className={`${LinkStyles}`}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/Signup" className={`${LinkStyles}`}>
              Sign up
            </Link>
          </li>
          <li>
            <Link to="/login" className={`${LinkStyles}`}>
              Log in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
