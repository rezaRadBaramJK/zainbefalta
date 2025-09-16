"use client";
import GenderButton from "@/app/_components/genderButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleClick(gender) {
    localStorage.setItem("gender", gender ?? null);
    startTransition(async () => {
      router.push("/register");
    });
  }

  return (
    <div className="page-container pt-10">
      <div className="w-full h-auto flex flex-col items-center text-content text-center z-10">
        <div dir={"rtl"}>
          <p className="font-bold text-[49px] leading-[50px]">
            ! بطولة بانتظارك
          </p>
          <p className="font-regular text-[21px] leading-[25px]">
            سجل في مسابقة فلته
          </p>
        </div>
        <p className="mt-8 font-bold text-[49px] leading-[50px]">
          Glory awaits!
        </p>
        <p className="mt-4 font-regular text-[21px] leading-[25px]">
          Register for the Falta competition
        </p>
      </div>

      <div className="w-full h-auto flex items-center justify-center gap-10 mt-16 z-10">
        {isPending ? (
          <Image
            src={"/buttonLoadingWhite.svg"}
            alt={""}
            width={50}
            height={50}
          />
        ) : (
          <>
            <GenderButton onClick={() => handleClick(1)}>
              <span>Male</span>
              <span>|</span>
              <span>شباب</span>
            </GenderButton>
            <GenderButton onClick={() => handleClick(2)}>
              <span>Female</span>
              <span>|</span>
              <span>بنات</span>
            </GenderButton>
          </>
        )}
      </div>

      {/* <div className="absolute bottom-0 start-0 w-full h-[330px] z-[5]">
        <Image src={"/home-image.png"} alt={""} fill className="object-cover" />
      </div> */}
    </div>
  );
}
