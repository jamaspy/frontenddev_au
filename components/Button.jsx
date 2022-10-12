import classNames from "classnames";
import React from "react";
const Button = ({ children, className, disabled, clickFn }) => {
  return (
    <button
      onClick={clickFn}
      disabled={disabled}
      className={classNames(
        className,
        "px-4 py-2 bg-slate-400 text-white font-semibold rounded-lg"
      )}
    >
      <div className="flex flex-row items-center justify-center">
        {children}
      </div>
    </button>
  );
};

export default Button;
