import React, { useState } from "react";
import Input from "../utilities/Input";
import Select from "react-select";
import FileInputComponent from "react-file-input-previews-base64";
import Button from "../utilities/Button";
import { BiUpload } from "react-icons/bi";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const Signup = ({ changePage }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  function handleTheme(theme) {
    return {
      ...theme,
      borderRadius: "5px",
      colors: {
        ...theme.colors,
        primary25: "#33b0cb",
        primary: "#33b0cb",
        neutral50: "#33b0cb",
        neutral80: "#33b0cb",
      },
    };
  }
  return (
    <>
      {" "}
      <div className="flex flex-col h-max overflow-hidden md:h-full hover:overflow-y-scroll transition-all duration-700 ease-in-out gap-10 justify- items-start w-full md:w-1/2 p-[5%] ">
        <div className="flex flex-col gap-4">
          <p className="text-task-primary font-semibold text-4xl">Sign up</p>
          <p className="text-[#626476] text-xs">
            Sign up to access the dashboard
          </p>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <Input
            type="text"
            name="name"
            label="Name"
            // onchange={onChange}
            id="reg_name"
          />
          <Input
            name="email"
            type="email"
            label="Email"
            // onchange={onChange}
            id="reg_email"
          />
          <Input
            type="password"
            name="password"
            label="Password"
            // onchange={onChange}
            id="reg_password"
          />
          <Input
            type="password"
            name="password_confirmation"
            label="Confirm Password"
            // onchange={onChange}
            id="reg_password_confirmation"
          />

          <Input
            type="text"
            name="phone"
            label="Phone"
            // onchange={onChange}
            id="reg_phone"
          />

          <p className="text-[#33b0cb] text-xs  px-1 py-1">
            Pick The Stream You Are Working Under!
          </p>
          <div className="w-full">
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              //   value={stream}
              //   onChange={handleChange}
              //   options={streams}
              theme={(theme) => handleTheme(theme)}
              className="text-primary ml-1  placeholder:text-N95 placeholder:text-sm border-[#33b0cb]   focus:border-[#33b0cb] focus:ring-[#33b0cb] rounded-md"
            />
          </div>

          {/* <Select
            primaryColor={"cyan"}
            value={stream}
            onChange={handleChange}
            options={streams}
            classNames={{
              menuButton: ({ isDisabled }) =>
                `z-50 flex text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none ${
                  isDisabled
                    ? "bg-gray-200"
                    : "bg-white hover:border-gray-400 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20"
                }`,
              menu: "absolute z-50 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700",
              listItem: ({ isSelected }) =>
                `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                  isSelected
                    ? `text-white bg-cyan-500`
                    : `text-gray-500 hover:bg-cyan-100 hover:text-gray-400`
                }`,
            }}
          /> */}
          <Input
            type="text"
            name="position"
            label="Position"
            // onchange={onChange}
            id="reg_position"
          />
          {/* 
          <div className="flex items-center justify-center">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h- border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-task-secondary/5 hover:bg-task-secondary/10 "
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="mb-2 text-sm text-gray-500 ">
                  Upload Profile Image
                </p>
                <p className="text-xs text-gray-500 ">
                  Drag and drop or click to browse
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div> */}

          <FileInputComponent
            labelText="upload a profile picture"
            // inputName="profile_picture"
            multiple={true}
            callbackFunction={(file_arr) => {
              //   setProfileImage(file_arr[0].file);
            }}
            labelStyle={{ fontSize: 14, color: "#5FC9E1" }}
            accept="image/*"
            imageStyle={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
            }}
            parentStyle={{
              border: "2px dashed #07777a6a",
              height: "100%",
              width: "100%",
              borderRadius: "5px",
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
            imageContainerStyle={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            buttonComponent={<BiUpload color="#5FC9E1" size={50} />}
          />
          <Button
            // handleClick={onSubmit}
            custom={
              "py-2 text-white h-[40px] bg-gradient-to-br from-task-primary to-task-secondary"
            }>
            Register
          </Button>
          <p className="text-N40 cursor-pointer text-xs xl:text-sm text-center">
            Already have an account?{" "}
            <span
              onClick={changePage}
              className="text-task-secondary hover:underline">
              Sign In
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
