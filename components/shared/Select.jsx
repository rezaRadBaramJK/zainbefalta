"use client";
import React from "react";

const Select = ({
  id,
  name,
  label,
  value = [],
  onChange,
  onBlur,
  disabled,
  placeholder,
  options = [],
  multiple = false,
}) => {
  const handleChange = (e) => {
    if (multiple) {
      const selected = Array.from(e.target.selectedOptions).map((o) => o.value);
      onChange &&
        onChange({
          target: { name, value: selected },
        });
    } else {
      onChange &&
        onChange({
          target: { name, value: e.target.value },
        });
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

      {/* استایل مشابه: لاین پایین + تایپوگرافی */}
      <div className="w-full border-b-[2px] border-b-submit-button">
        <select
          id={id}
          name={name}
          multiple={multiple}
          disabled={disabled}
          onBlur={onBlur}
          value={value}
          onChange={handleChange}
          className="bg-transparent w-full text-content outline-none text-xl h-[33px]"
        >
          {!multiple && (
            <option value="" disabled>
              {placeholder || "Select..."}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
