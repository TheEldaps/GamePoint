import { Link } from "react-router-dom";

export default function SideNavLink({
  src,
  icon,
  title,
  path,
  textcol = "text-[#A4A6A6]",
  bg = "",
}) {
  return (
    <li
      className={`flex ${bg}  text-[white] items-center h-[60px] hover:bg-[#5C9703] pl-[10px] py-[10px] hover:text-[black]`}
    >
      <Link
        to={path}
        className={`flex ${textcol} no-underline w-[100%] border-l-[black] border-l-[5px] h-[80%] pl-[10px] items-center`}
      >
        <img src={src} alt={icon} className="w-[20px] h-[20px] mr-[20px]" />
        <span className="text-[1.1rem]">{title}</span>
      </Link>
    </li>
  );
}
