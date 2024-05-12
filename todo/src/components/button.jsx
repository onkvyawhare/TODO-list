import React from "react";



const Button = ({ variant = "big", onClick, children }) => {
    const buttonSize = variant === "big" ? "py-2 px-4" : "py-1 px-2";
    
    return (
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold rounded ${buttonSize}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

export default Button;
