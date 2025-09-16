"use client";
import React from "react";
import Select from "react-select";

const LuxSelect = ({
  id,
  name,
  label,
  value,
  onChange,
  onBlur,
  disabled,
  placeholder,
  options = [],
  isMulti = false,
  className = "",
}) => {
  const customStyles = {
    control: (base) => ({
      ...base,
      background: "transparent",
      border: "none",
      boxShadow: "none",
      borderRadius: 0,
      minHeight: "33px",
      borderBottom: "2px solid var(--submit-button, #0ea5b5)",
    }),
    valueContainer: (b) => ({ ...b, padding: 0 }),
    placeholder: (b) => ({
      ...b,
      color: "var(--content, #111827)",
      opacity: 0.6,
    }),
    input: (b) => ({
      ...b,
      color: "var(--content, #111827)",
      margin: 0,
      padding: 0,
    }),
    singleValue: (b) => ({ ...b, color: "var(--content, #111827)" }),
    multiValue: (b) => ({
      ...b,
      backgroundColor: "rgba(14,165,181,0.12)",
      borderRadius: 12,
    }),
    multiValueLabel: (b) => ({
      ...b,
      color: "var(--content, #111827)",
      fontSize: "0.875rem",
      padding: "2px 6px",
    }),
    multiValueRemove: (b) => ({
      ...b,
      borderRadius: 12,
      ":hover": { backgroundColor: "rgba(14,165,181,0.25)" },
    }),
    indicatorsContainer: (b) => ({ ...b, padding: 0 }),
    dropdownIndicator: (b, s) => ({
      ...b,
      padding: 0,
      transform: s.selectProps.menuIsOpen ? "rotate(180deg)" : undefined,
      transition: "transform 120ms ease",
    }),
    menu: (b) => ({
      ...b,
      borderRadius: 12,
      overflow: "hidden",
      boxShadow:
        "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
    }),
    option: (b, s) => ({
      ...b,
      backgroundColor: s.isSelected
        ? "rgba(14,165,181,0.2)"
        : s.isFocused
        ? "rgba(14,165,181,0.1)"
        : "white",
      color: "#111827",
      cursor: "pointer",
      ":active": { backgroundColor: "rgba(14,165,181,0.25)" },
    }),
    menuPortal: (b) => ({ ...b, zIndex: 9999 }),
    container: (b) => ({ ...b, width: "100%" }),
  };

  return (
    <div
      className={`w-full flex flex-col items-start select-none ${className}`}
      dir="rtl"
    >
      <label
        htmlFor={id}
        className="w-full text-content flex items-center justify-between"
      >
        {label}
      </label>
      <Select
        inputId={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isDisabled={disabled}
        isMulti={isMulti}
        options={options}
        placeholder={placeholder || "اختر..."}
        styles={customStyles}
        classNamePrefix="lux"
        menuPortalTarget={typeof window !== "undefined" ? document.body : null}
      />
    </div>
  );
};

export default LuxSelect;
