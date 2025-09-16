"use client";
import React, { useEffect, useTransition } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import FormikInput from "@/components/shared/FormikInput";
import FormikLuxMultiSelect from "@/components/shared/FormikLuxMultiSelect";
import { CATEGORIES_OPTIONS } from "@/constants/categoriesOptions";
import useFetch from "@/hooks/useFetch";
import { registerUser } from "@/services/user/registerUser";

const initialValues = {
  fullName: "",
  age: 18,
  PhoneNumber: "",
  TikTokUserName: "",
  Categories: [],
  Nationality: "(Kuwaity كويتي)",
};

const validationSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .required("الاسم الكامل مطلوب | Name is required"),
  age: Yup.number()
    .typeError("قيمة غير صالحة | Invalid age")
    .min(0, "القيمة غير صالحة | Min is 0")
    .max(120, "القيمة غير صالحة | Max is 120")
    .required("العمر مطلوب | Age is required"),
  PhoneNumber: Yup.string()
    .matches(/^[0-9]{8,15}$/, "الرجاء إدخال رقم هاتف صالح (8–15 أرقام)")
    .required("رقم الهاتف مطلوب | Phone number is required"),
  TikTokUserName: Yup.string().trim().required("اسم مستخدم تيك توك مطلوب"),
  Categories: Yup.array()
    .of(Yup.string().trim())
    .min(1, "اختر عنصرين على الأقل | Select at least 2")
    .required("التصنيفات مطلوبة | Categories are required"),
  Nationality: Yup.string()
    .trim()
    .required("الجنسية مطلوبة | Nationality is required"),
});

const RegisterForm = () => {
  const { fetch, loading } = useFetch(registerUser, false, {
    toastOnError: true,
  });
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    try {
      const genderRaw = localStorage.getItem("gender");
      const gender = genderRaw ? JSON.parse(genderRaw) : null;
      if (!gender) {
        startTransition(() => {
          toast.warning("Please Select Gender.");
          router.push("/");
        });
      }
    } catch {
      startTransition(() => {
        toast.warning("Please Select Gender.");
        router.push("/");
      });
    }
  }, [router, startTransition]);

  const handleSubmit = (values) => {
    try {
      const genderRaw = localStorage.getItem("gender");
      const gender = genderRaw ? JSON.parse(genderRaw) : null;
      if (!gender) {
        toast.warning("Please Select Gender.");
        return router.push("/");
      }

      const payload = {
        ...values,
        Categories: values.Categories.join(", "),
        gender,
      };

      fetch(payload)
        .then((response) => {
          if (response?.success) {
            startTransition(() => {
              localStorage.removeItem("gender");
              const { registeredUserId } = response?.data || {};
              router.push(`/success/${registeredUserId}`);
            });
          }
        })
        .catch(() => {
          localStorage.removeItem("gender");
          router.push(`/registration-full`);
        });
    } catch {
      localStorage.removeItem("gender");
      router.push(`/registration-full`);
    }
  };

  const arabicLabel = "text-[14px] !font-almarai font-bold leading-[19px]";
  const englishLabel = "text-[20px] font-bold leading-[25px]";

  return (
    <>
      {isPending ? (
        <Image
          src={"/buttonLoadingWhite.svg"}
          alt=""
          width={100}
          height={100}
        />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          <Form
            className="w-full flex flex-col items-center gap-[48px] mt-6 z-10"
            dir="rtl"
          >
            <FormikInput
              id="fullName"
              name="fullName"
              label={
                <>
                  <p className={englishLabel}>*Name:</p>
                  <p className={arabicLabel}>:الاسم*</p>
                </>
              }
            />
            <FormikInput
              id="age"
              name="age"
              type="number"
              inputMode="numeric"
              min={0}
              max={120}
              label={
                <>
                  <p className={englishLabel}>*Age:</p>
                  <p className={arabicLabel}>:العمر*</p>
                </>
              }
            />
            <FormikInput
              id="Nationality"
              name="Nationality"
              label={
                <>
                  <p className={englishLabel}>*Nationality:</p>
                  <p className={arabicLabel}>:الجنسية*</p>
                </>
              }
            />
            <FormikInput
              id="TikTokUserName"
              name="TikTokUserName"
              label={
                <>
                  <p className={englishLabel}>*TikTok Username:</p>
                  <p className={arabicLabel}>:اسم مستخدم تيك توك*</p>
                </>
              }
            />
            <FormikInput
              id="PhoneNumber"
              name="PhoneNumber"
              inputMode="numeric"
              label={
                <>
                  <p className={englishLabel}>*Phone Number:</p>
                  <p className={arabicLabel}>:رقم الهاتف*</p>
                </>
              }
            />

            {/* Luxury multi-select (react-select) */}
            <FormikLuxMultiSelect
              id="Categories"
              name="Categories"
              options={CATEGORIES_OPTIONS}
              label={
                <>
                  <p className={englishLabel}>*Categories :</p>
                  <p className={arabicLabel}>:التصنيفات *</p>
                </>
              }
            />

            <button
              className="rounded-full bg-submit-button text-white font-medium px-16 py-3 text-base !font-poppins transition-all duration-300"
              type="submit"
            >
              {loading ? (
                <Image
                  src={"/buttonLoadingWhite.svg"}
                  alt=""
                  width={16}
                  height={16}
                />
              ) : (
                "SUBMIT"
              )}
            </button>
          </Form>
        </Formik>
      )}

      <Link
        href="/terms-and-conditions"
        className="bg-white text-black rounded-md px-5 py-2 mt-10 hover:underline z-[10]"
      >
        الشروط والأحكام
      </Link>
    </>
  );
};

export default RegisterForm;
