"use client";
import React from "react";
import { useField } from "formik";
import Input from "./Input";
import { cn } from "@/libs/cn";

const FormikInput = ({ name, id, wrapperClassName, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <div className={cn("w-full", wrapperClassName)}>
      <Input id={id} name={name} {...field} {...props} />
      {meta.touched && meta.error && (
        <div className="text-xs text-red-600 mt-1 ps-2">{meta.error}</div>
      )}
    </div>
  );
};

export default FormikInput;
