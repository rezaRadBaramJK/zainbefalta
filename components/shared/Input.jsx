"use client";
import React from "react";

const Input = ({
  name,
  id,
  label,
  type,
  value,
  onChange,
  onBlur,
  disabled,
  placeholder,
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="w-full flex flex-col justify-start items-start select-none">
      <label
        htmlFor={id}
        className="w-full text-content flex items-center justify-between"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        className="bg-transparent w-full border-b-[2px] border-b-submit-button text-content outline-none text-xl h-[33px]"
        type={type ?? "text"}
        onChange={handleChange}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
        placeholder={placeholder ?? ""}
      />
    </div>
  );
};

export default Input;
