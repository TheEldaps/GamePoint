import Input from "../Components/Input";
import Logo from "../Components/Logo";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";

export default function LoginPage() {
  return (
    <section className="flex justify-center  pb-[50px] bg-[#0F0F0F] text-[white] ">
      <Nav />
      <section className=" pt-[20px] mt-[100px] md:mt-[150px] mx-[20] px-[40px] md:min-w-[500px] sm:border-1">
        <div className="mb-[40px]">
          <Logo />
        </div>

        <section className="mb-[50px]">
          <div>
            <h1 className="text-[2rem] mb-[0px]">Create Account</h1>
            <p className="text-[0.6rem]">
              Sign up with your email or use your social account
            </p>
          </div>

          <div className="px-[2px]">
            <Input title="Firstname" />
            <Input title="Lastname" />
            <Input title="Email" />
            <Input title="Date of Birth" />
            <Input title="Create password" placeholder="Password" />
          </div>

          <div>
            <button className="block bg-[green] hover:bg-[#008000a5] py-[8px] cursor-pointer w-[70%] mx-[auto] mt-[40px] mb-[60px]">
              <Link className="block no-underline ">Create Account</Link>
            </button>

            <span>
              Have an Account? <Link>Log-in</Link>
            </span>

            <div className="flex items-center my-[20px]">
              <hr className="mr-[5px] w-[44%]" /> or{" "}
              <hr className="ml-[5px] w-[44%]" />
            </div>
          </div>

          <div className="flex justify-around gap-[5px] ">
            <button className="grow cursor-pointer bg-[red]">Meta</button>
            <button className="grow cursor-pointer bg-[blue]">Google</button>
            <button className="grow cursor-pointer bg-[green]">Apple</button>
          </div>
        </section>
      </section>
    </section>
  );
}
