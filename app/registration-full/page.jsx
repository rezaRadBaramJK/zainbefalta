import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="page-container justify-center pt-[62px]">
      <div className="border-[2px] border-content rounded-[49px] flex flex-col items-center gap-7 pt-[50px] pb-[29px] px-[26px] text-content text-center z-[10] bg-main">
        <Image src={"/icon.png"} alt={""} width={68} height={74} />
        <p
          className="w-full flex flex-col items-center font-regular text-[20px] leading-[35px] gap-2 mt-5"
          dir={"rtl"}
        >
          جميع المقاعد محجوزة.
          <br />
          أنت الان في قائمة الانتظار.
          <br />
          سنقوم بالاتصال بك في حال توفر مقعد.
          <br />
        </p>
        <div className="w-full flex flex-col items-center font-regular text-[20px] leading-[35px] gap-2">
          All reservations are full.
          <br />
          You are on the waiting list.
          <br />
          We will contact you if a spot becomes available.
          <br />
        </div>
      </div>
      <div className="absolute bottom-0 start-0 w-[564px] h-[494px] transform -translate-x-[130px] translate-y-[330px] z-[5]">
        <Image
          src={"/pages-image.png"}
          alt={""}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Page;
