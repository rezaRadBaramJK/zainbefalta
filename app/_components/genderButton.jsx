import React from "react";

const GenderButton = ({ onClick, children }) => {
  function handleClick(e) {
    if (onClick) onClick(e);
  }

  return (
    <button
      className="bg-submit-button rounded-full font-extrabold text-[17px] leading-5 text-white  flex items-center justify-center gap-1.5 px-6 py-2 transition-all duration-200"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default GenderButton;
