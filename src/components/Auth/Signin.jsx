import Logo from "../../assets/Logo.svg";
import Button from "../utilities/Button";
import Input from "../utilities/Input";

const Signin = ({ changePage }) => {
  return (
    <div className="flex flex-col h-full  gap-10 justify-center items-start w-full lg:w-1/2  p-[5%]">
      <div className="w-full -mt-6 flex justify-center items-center">
        <img
          src={Logo}
          alt="Logo"
          className="text-center z-20 w-[20%] md:hidden block mb-6"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-task-primary font-semibold text-4xl">Sign In</p>
        <p className="text-[#2e2e30] text-xs">
          Sign in to access the mols project management dashboard
        </p>
      </div>

      <div className="flex flex-col gap-5 w-full">
        <Input name="email" type="email" label="Email" id="login_email" />
        <Input
          type="password"
          name="password"
          label="Password"
          id="login_password"
        />

        <Button
          //   handleClick={onSubmit}
          custom={
            " text-white h-[40px] bg-gradient-to-br from-task-primary to-task-secondary"
          }>
          Sign In
        </Button>
        <p className="text-N40 cursor-pointer  text-xs xl:text-sm text-center">
          Don't have an account?{" "}
          <span
            onClick={changePage}
            className="text-task-secondary hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
