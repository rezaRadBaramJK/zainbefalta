import React from "react";
import RegisterForm from "@/app/register/_components/registerForm";
import Image from "next/image";

const Page = () => {
  return (
    <div className="page-container pt-[82px]">
      <RegisterForm />
      {/* <div className="absolute bottom-0 start-0 w-[564px] h-[494px] transform -translate-x-[130px] translate-y-[330px] z-[5]">
        <Image src={'/pages-image.png'} alt={''} fill className="object-cover"/>
      </div> */}
    </div>
  );
};

export default Page;
