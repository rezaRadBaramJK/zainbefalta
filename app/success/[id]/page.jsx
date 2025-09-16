import React from "react";
import QRCode from "react-qr-code";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }) => {
  const { id } = await params;

  const getQrValue = (id) => process.env.NEXT_PUBLIC_QR + `/${id}`;

  return (
    <div className="page-container pt-[49px]">
      <div className="w-full h-auto flex flex-col items-center text-content text-center z-10">
        <p className="text-[30px] font-extrabold  leading-[35px]" dir={"rtl"}>
          مبروك!
          <br />
          تم تسجيلك في بطولة
          <br />
          زين X نقاط
          <br />
        </p>
        <p className="mt-5 text-[30px] font-regular  leading-[35px]">
          Congrats!
          <br />
          You Are Now Registered For
          <br />
          Zain X Nuqat Competition
          <br />
        </p>
      </div>
      <div className="size-[114px] mt-[29px] p-1 bg-white z-10">
        <QRCode
          size={60}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={getQrValue(id)}
          viewBox="0 0 60 60"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-[21px] gap-[13px] z-10">
        <Image src={"/hand-down.png"} alt={""} width={24} height={42} />
        <Link
          href={getQrValue(id)}
          className="bg-white text-center text-black font-semibold !font-poppins text-[14px] leading-[19px] rounded-2xl px-5 py-[15px] truncate"
        >
          View Your Booking
        </Link>
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
