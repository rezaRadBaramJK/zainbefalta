import React from "react";
import { getUserProfile } from "@/services/user/getUserProfile";
import Image from "next/image";

const Page = async ({ params }) => {
  const { id } = await params;

  const { Data } = await getUserProfile(id);
  console.log(Data);
  return (
    <div className="page-container pt-[62px]">
      <div className="w-full border-[2px] border-white rounded-[49px] flex flex-col items-start gap-7 pt-[50px] pb-[29px] px-[26px] text-content text-start z-[10] bg-main">
        {Object.entries(Data).map(([key, value]) => {
          if (key.toString().toLowerCase() === "id") return null;

          switch (key.toString().toLowerCase()) {
            case "fullname":
              return <InfoRow key={key} enTitle={"Full Name"} value={value} />;
            case "age":
              return <InfoRow key={key} enTitle={"Age"} value={value} />;
            case "email":
              return (
                <InfoRow key={key} enTitle={"Email Address"} value={value} />
              );
            case "gender":
              return (
                <InfoRow
                  key={key}
                  enTitle={"Gender"}
                  value={value.toLowerCase() === "boy" ? "Male" : "Female"}
                />
              );
            case "phonenumber":
              return (
                <InfoRow key={key} enTitle={"Phone Number"} value={value} />
              );
            case "registerdate":
              return (
                <InfoRow key={key} enTitle={"Register Date"} value={value} />
              );
          }
        })}
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

const InfoRow = ({ enTitle, arTitle, value }) => {
  return (
    <div className="flex items-center text-2xl">
      <span className="font-regular">{enTitle}</span>
      &nbsp;
      {arTitle && (
        <span className="font-semibold !text-[18px]">({arTitle})</span>
      )}
      : &nbsp;
      <span className="font-light !text-xl ms-3">{value}</span>
    </div>
  );
};
