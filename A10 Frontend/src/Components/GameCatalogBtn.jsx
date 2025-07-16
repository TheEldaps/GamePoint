import { Link } from "react-router-dom";
export default function GameCatalogBtn() {
  return (
    <div className="flex justify-center ">
      <Link
        to="/Games"
        className="flex justify-center md:w-[600px]  px-[20px] py-[10px] text-[#000000] text-[1.6rem] rounded-2xl hover:bg-[#8ac72f9b] hover:text-[#ffffff97] bg-[#5C9703] mb-[80px]"
      >
        More Games &#8594;
      </Link>
    </div>
  );
}
