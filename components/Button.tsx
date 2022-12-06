import React from "react";
import classnames from "classnames";

export interface ButtonProps {
  onClick?: () => void;
  children: string | JSX.Element;
  variant?: "primary";
  type?: "button" | "submit";
  ariaLabel: string;
  icon?: JSX.Element;
  isFullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = "primary",
  type = "button",
  ariaLabel,
  icon,
  isFullWidth,
}) => {
  const classesButton = classnames({
    "font-medium items-center rounded-[5px] px-4 py-3 capitalize flex justify-center items-center gap-2":
      true,
    "text-white bg-primary hover:bg-primary-dark active:bg-primary-dark":
      variant === "primary",
    "w-full": isFullWidth,
  });

  return (
    <button
      aria-label={ariaLabel || "action button"}
      onClick={onClick}
      type={type}
      className={classesButton}
    >
      {icon ? icon : null}
      {children}
    </button>
  );
};

export default Button;
