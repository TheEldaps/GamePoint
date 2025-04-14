import Logo from "./Logo";

export default function Footer() {
  return (
    <section className="flex w-[800px] justify-between text-[#fff] pt-[30px] px-[40px]">
      <div className=" flex flex-col items-center  ">
        <Logo />
        <p className="mt-[0px] text-[0.8rem] mx-[auto]">
          Connecting the world of Esports
        </p>
      </div>
      <div>
        <ul className="flex flex-col list-none gap-y-[10px] text-[1.1rem]">
          <li>Home</li>
          <li>Tournaments</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </section>
  );
}
