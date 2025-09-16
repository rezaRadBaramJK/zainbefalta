"use client";
import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const MainLayout = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="md:w-[430px] pt-10 m-auto bg-main  h-auto min-h-screen py-[35px] px-[29px] relative overflow-hidden">
      <div style={{ direction: "ltr" }} className="select-none">
        <div className="flex items-center gap-4 my-5">
          <button
            onClick={() => {
              if (pathname === "/") {
                router.push(process.env.NEXT_PUBLIC_NUQAT_ADDRESS);
              } else {
                router.back();
              }
            }}
            className="bg-primary p-2 rounded-full select-none"
          >
            <Image alt={""} width={26} height={26} src={"/back.svg"} />
          </button>
          {/*<p className="text-[#004589]">{title}</p>*/}
        </div>
      </div>
      <div className="relative w-full flex justify-center items-center z-[10]">
        <Image src={"/falta-logo.svg"} alt={"nuqat"} width={160} height={160} />
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
