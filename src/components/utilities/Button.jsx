const Button = ({ type, children, custom, handleClick }) => {
  return (
    <button
      type={type}
      className={`${custom} px-4 sm:px-6 capitalize z-10 cursor-pointer opacity-80 hover:opacity-100 transition-all duration-200 ease-in`}
      onClick={(e) => {
        handleClick(e);
      }}>
      {children}
    </button>
  );
};

export default Button;
