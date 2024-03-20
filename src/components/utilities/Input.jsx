import { ChangeEventHandler } from "react";

type InputProps = Partial<{
  type: string,
  id: string,
  label: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  children: React.ReactNode,
}>;

const Input = ({ type, id, label, children, onChange }: InputProps) => {
  return (
    <>
      <div className="relative z-0 w-full flex flex-col gap-2.5">
        <input
          onChange={onChange}
          type={type}
          id={id}
          className="block py-2 px-0 w-full text-sm text-[#33b0cb]  bg-transparent border-0 border-b border-[#33b0cb] appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
        />
        <div className="text-xs font-normal text-gray-dark w-full flex justify-between items-start sm:items-center">
          {children}
        </div>
        <label
          htmlFor={id}
          className="absolute text-sm  text-[#33b0cb] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          {label}
        </label>
      </div>
    </>
  );
};

export default Input;
