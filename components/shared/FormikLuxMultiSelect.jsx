"use client";
import React from "react";
import { useField, useFormikContext } from "formik";
import LuxSelect from "./LuxSelect";
import { cn } from "@/libs/cn";

const FormikLuxMultiSelect = ({
  id,
  name,
  label,
  options,
  placeholder,
  wrapperClassName,
}) => {
  const [field, meta] = useField(name);
  const { setFieldValue, setFieldTouched } = useFormikContext();

  const toSelectValue = (vals) =>
    Array.isArray(vals)
      ? options.filter((opt) => vals.includes(opt.value))
      : [];

  const handleChange = (selected) => {
    const vals = Array.isArray(selected) ? selected.map((s) => s.value) : [];
    setFieldValue(name, vals);
  };

  const handleBlur = () => setFieldTouched(name, true);

  return (
    <div className={cn("w-full", wrapperClassName)}>
      <LuxSelect
        id={id}
        name={name}
        label={label}
        value={toSelectValue(field.value)}
        onChange={handleChange}
        onBlur={handleBlur}
        options={options}
        isMulti
        placeholder={placeholder}
      />
      {meta.touched && meta.error && (
        <div className="text-xs text-red-600 mt-1 ps-2">{meta.error}</div>
      )}
    </div>
  );
};

export default FormikLuxMultiSelect;
