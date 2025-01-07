import Link from "next/link";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const Form = ({
  title,
  subtitle,
  children,
  onSubmit,
  onChangeCheckbox,
  checked,
  errorMessage,
  ClassName,
  type,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      action=""
      className={`flex flex-col p-7 gap-2 w-full h-full rounded-sm overflow-hidden ${ClassName}`}
    >
      <div className="mb-4 flex flex-col gap-2 text-primary">
        <span className="text-4xl font-bold  text-center tracking-wider ">
          {title}
        </span>
        <span className="text-base text-center">{subtitle}</span>
      </div>
      {children}
      <div className="flex px-2 justify-between items-center">
        <div>
          <input
            id="show"
            type="checkbox"
            checked={checked}
            onChange={onChangeCheckbox}
          />
          <label for="show" className="pl-1 text-xs text-primary">
            Show Password
          </label>
        </div>
        <div className="text-red-500 text-sm font-semiboldbold">
          {errorMessage}
        </div>
      </div>
      <button
        type="submit"
        className="py-1.5 bg-accent text-secondary font-bold tracking-wider rounded-md sm:py-2"
      >
        {title}
      </button>

      <h1 className=" text-sm text-center text-primary">
        {`${type === "login" ? "Don't" : "Your"} Have an Account?  `}
        <Link
          className="font-bold text-accent cursor-pointer"
          href={`${type === "login" ? "/register" : "/login"}`}
        >
          {`${type === "login" ? "Register" : "Login"}`}
        </Link>
      </h1>
      <div className="flex justify-center flex-col items-center">
        <div className="w-20 border border-b border-accent "></div>
        <h6 className=" text-center text-sm text-primary">or continue with</h6>
      </div>
      <div className="flex gap-2 text-primary justify-center items-center">
        <button>
          <FaGoogle
            size={23}
            className="hover:text-accent hover:scale-110 transition-all"
          />
        </button>
        <button>
          <FaFacebookSquare
            size={24}
            className="hover:text-accent hover:scale-110 transition-all"
          />
        </button>
        <button>
          <FaSquareInstagram
            size={24}
            className="hover:text-accent hover:scale-110 transition-all"
          />
        </button>
      </div>
    </form>
  );
};

export default Form;
