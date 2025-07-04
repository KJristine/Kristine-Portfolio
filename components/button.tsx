import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  loading = false,
  icon,
}) => {
  return (
    <button
      type="button"
      className={`font-sans relative flex justify-center items-center gap-2 border border-white rounded-xl text-black font-semibold bg-white uppercase px-6 py-2 text-base z-10 overflow-hidden ease-in-out duration-700 group
  hover:text-white
  hover:bg-gradient-to-r hover:from-yellow-300 hover:to-yellow-500
  hover:border-yellow-400
  focus:bg-gradient-to-r focus:from-yellow-300 focus:to-yellow-500
  focus:text-white focus:border-yellow-400
  active:scale-95 active:duration-0
  isolation-auto
  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gradient-to-r before:from-yellow-300 before:to-yellow-500 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700
  ${className}`}
      onClick={onClick}
      disabled={loading}
    >
      <span
        className={`truncate ease-in-out duration-300 ${
          loading
            ? "group-active:-translate-x-96 group-focus:translate-x-96"
            : ""
        }`}
      >
        {children}
      </span>
      <div
        className={`absolute flex flex-row justify-center items-center gap-2 -translate-x-96 ease-in-out duration-300 ${
          loading ? "group-active:translate-x-0 group-focus:translate-x-0" : ""
        }`}
      >
        <div className="animate-spin size-4 border-2 border-white border-t-transparent rounded-full"></div>
        Processing...
      </div>
      {icon ? (
        <span className="ml-2">{icon}</span>
      ) : (
        <svg
          className="fill-black group-hover:fill-white group-hover:-translate-x-0 group-active:translate-x-96 group-active:duration-0 group-focus:translate-x-96 group-focus:fill-white ease-in-out duration-700"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"></path>
        </svg>
      )}
    </button>
  );
};

export default Button;
