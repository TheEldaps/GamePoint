import { Link } from "react-router-dom";

export default function SideNavLink({
  src,
  icon,
  title,
  path,
  textcol = "text-[#A4A6A6]",
  onClick,
  id,
  active,
}) {
  let theOne = active === id;
  return (
    <li
      className={`flex  text-[white] items-center h-[80px]  md:pl-[10px]  hover:text-[black] border-b`}
    >
      <Link
        onClick={onClick}
        to={path}
        className={`flex ${textcol} no-underline ${
          theOne ? "bg-[#5C9703]" : ""
        } hover:bg-[#5C9703] w-[100%] h-[100%] px-[10px] md:pl-[5px] items-center`}
      >
        <div className="w-[1px] h-[60%] border-l-[5px] ml-[5px] mr-[6px] md:mr-[10px] border-l-[black]"></div>
        <img
          src={src}
          alt={icon}
          className="w-[20px]  h-[20px] mr-[9px] md:mr-[20px]"
        />
        <span className="md:text-[1.3rem]">{title}</span>
      </Link>
    </li>
  );
}
