import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="page-container justify-center pt-[62px]">
      <div className="  rounded-[49px] flex flex-col items-center gap-7 pt-[50px] pb-[29px] px-[26px] text-content text-center z-[10] bg-main">
        <p className="w-full text-[#FF4B00] flex flex-col items-center font-regular text-[56px] font-semibold leading-[35px] gap-2 mt-5">
          ! مـــــــــــبــــــــروك
        </p>
        <p className="w-full flex flex-col items-center font-regular text-[24px] leading-[35px] gap-2 ">
          <br />
          أنت الآن مسجل في مسابقة فلتة
          <br />
          سيتم التواصل معك قريباً
          <br />
        </p>
        <div className="flex justify-center items-center mt-10">
          <Link
            href={"https://befalta.com"}
            className="rounded-full bg-submit-button text-white  px-16 py-3 text-base !font-poppins transition-all duration-300"
          >
            Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
