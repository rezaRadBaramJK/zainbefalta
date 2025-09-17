import React from "react";
import QRCode from "react-qr-code";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }) => {
  const { id } = await params;

  const getQrValue = (id) => process.env.NEXT_PUBLIC_QR + `/${id}`;

  return (
    <div className="page-container pt-[49px]">
      <p className="w-full text-[#FF4B00] flex flex-col items-center font-regular text-[56px] font-semibold leading-[35px] gap-2 mt-5">
        ! مـــــــــــبــــــــروك
      </p>
      <p className="w-full flex flex-col text-center items-center font-regular text-[24px] leading-[35px] gap-2 ">
        <br />
        أنت الآن مسجل في مسابقة فلتة
        <br />
        سيتم التواصل معك قريباً
        <br />
      </p>
      <div className="size-[114px] mt-[29px] p-1 bg-white z-10">
        <QRCode
          size={60}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={getQrValue(id)}
          viewBox="0 0 60 60"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-[21px] gap-[13px] z-10">
        <Image
          src={"/finger-pointind-down.svg"}
          alt={""}
          width={24}
          height={42}
        />
        <Link
          href={getQrValue(id)}
          className="bg-white text-center text-black font-semibold !font-poppins text-[14px] leading-[19px] rounded-2xl px-5 py-[15px] truncate"
        >
          View Your Booking
        </Link>
      </div>
    </div>
  );
};

export default Page;
