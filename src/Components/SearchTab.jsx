import Logo from "./Logo";
import SearchIcon from "../assets/Images/SearchIcon.png";
import ProfilePicture from "../assets/Images/ProfilePicture.jpg";
import BellIcon from "../assets/Images/BellIcon.png";

export default function SearchTab() {
  return (
    <div className=" bg-[#121212] fixed border-[#000] items-center border-[4px] flex justify-around px-[20px] py-[5px]">
      <Logo />
      <div className="bg-[#0F0F0F] pl-[10px] py-[2px] ml-[200px] mr-[100px] w-[734px] items-center h-[40px] border-[#008000] border-[1px] flex">
        <img
          className="border-[#000] border-[2px] w-[20px] "
          src={SearchIcon}
          alt="search-icon"
        />
        <input
          className=" w-[100%] h-[100%] border-[0] bg-[#0F0F0F] text-[1.1rem] font-[sans-serif] font-[700] pl-[10px]"
          type="text"
          placeholder="Search here"
        />
      </div>
      <div className=" min-w-[400px] text-center pr-[50px] items-center flex">
        <img
          className="mr-[40px] w-[30px] h-[30px]"
          src={BellIcon}
          alt="bellicon"
        />
        <section className="flex items-center gap-[10px] ">
          <img src={ProfilePicture} alt="profile pic" className="w-[30px]" />
          <span className="text-[0.8rem] font-[600] font-[Arial] text-[#B1B2B2]">
            Pounds Sterling
          </span>
        </section>
      </div>
    </div>
  );
}
