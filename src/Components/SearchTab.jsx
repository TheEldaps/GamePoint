import { useState } from "react";
import SideNav from "./SideNav";
import Logo from "./Logo";
import SearchIcon from "../assets/Images/SearchIcon.png";
import ProfilePicture from "../assets/Images/ProfilePicture.jpg";
import BellIcon from "../assets/Images/BellIcon.png";

export default function SearchTab() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className=" fixed min-w-[100vw] bg-[#121212] md:items-center border-b-[2px] flex justify-between md:justify-around md:gap-[40px] px-[20px] py-[5px]">
      <Logo width="100px" text="1.5rem" imgWidth="20px" imgHeight="20px" />
      <button className="md:hidden" onClick={() => setShowNav((prev) => !prev)}>
        {showNav ? "Close" : "Menu"}
      </button>
      {showNav && <SideNav />} {/* mobile view side nav */}
      {/* Desktop View */}
      <div className="hidden md:flex bg-[#0F0F0F] pl-[10px] py-[2px]  grow max-w-[700px] items-center h-[40px] border-[#008000] border-[1px] ">
        <img className=" w-[20px] " src={SearchIcon} alt="search-icon" />
        <input
          className=" w-[100%] m h-[100%] border-none bg-[#0F0F0F] text-[1.1rem] font-[sans-serif] font-[700] pl-[10px]"
          type="text"
          placeholder="Search here"
        />
      </div>
      <div className="hidden  items-center md:flex">
        <img
          className="mr-[40px] w-[30px] h-[30px]"
          src={BellIcon}
          alt="bellicon"
        />
        <section className="hidden md:flex items-center gap-[10px] ">
          <img src={ProfilePicture} alt="profile pic" className="w-[30px]" />
          <span className="text-[0.8rem] font-[600] font-[Arial] text-[#B1B2B2]">
            Pounds Sterling
          </span>
        </section>
      </div>
    </div>
  );
}
