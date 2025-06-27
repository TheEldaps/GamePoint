import { Link } from "react-router-dom";
export default function GameCatalogBtn() {
  return (
    <div>
      <Link
        to="/tournaments"
        className="flex items-center px-[20px] py-[10px] text-[white] text-[2rem] rounded-2xl hover:bg-[#8ac72f9b] bg-[#8bc72f]"
      >
        More Games &#8594;
      </Link>
    </div>
  );
}
