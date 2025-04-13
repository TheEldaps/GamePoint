import { Link } from "react-router-dom";

export default function SideNavLink({ src, icon, title, path }) {
  return (
    <li className="h-[60px] w-[100%] hover:bg-[#5C9703] pl-[20px] py-[10px] hover:text-[black] border-[2px] border-[red]">
      <Link
        to={path}
        className="flex border-l-[black] border-l-[8px] h-[100%] justify-center items-center"
      >
        <img src={src} alt={icon} className="w-[20px]  h-[20px] mr-[20px]" />
        <span>{title}</span>
      </Link>
    </li>
  );
}
