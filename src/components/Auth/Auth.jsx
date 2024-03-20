import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import CircleColored from "../../assets/CircleColored.svg";
import Signin from "./Signin";
import Signup from "./Signup";

const Auth = () => {
  //page swap state
  const [page, setPage] = useState(true);
  //form states

  //function to swap pages (signin and signup)
  const changePage = () => {
    setPage((prev) => !prev);
  };
  return (
    <>
      <div className="w-full py-6 md:py-0 md:h-screen bg-task-lightBlue flex justify-center items-center px-2 md:px-0 prevent-select">
        <div className=" bg-white flex bigBoxShadow h-4/5 w-full md:w-4/5 2xl:w-3/5">
          {/* Login style */}
          <div className="hidden relative md:flex bg-task-lightBlue w-1/2 h-full">
            <div className="h-1/2 w-full backdrop-blur-[6px] z-10"></div>
            <img
              src={Logo}
              alt="Logo"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[25%]"
            />
            <img
              src={CircleColored}
              alt="CircleColored"
              className="w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"
            />
          </div>

          {/* main login form section */}
          {page ? (
            <Signin changePage={changePage} />
          ) : (
            <Signup changePage={changePage} />
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
