import React, { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  big?: boolean;
  submit?: boolean;
};

export const Button: React.FC<Props> = ({
  className,
  big = false,
  submit = false,
  ...props
}) => {
  return (
    <button
      className={` w-full rounded-full inline-flex justify-center items-center gap-2 border border-transparent font-semibold bg-primary text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 ${className} ${
        big ? "py-3 px-3 text-lg" : "py-1 px-2"
      }`}
      type={submit ? "submit" : "button"}
      {...props}
    ></button>
  );
};
export default Button;
