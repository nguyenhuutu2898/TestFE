"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

function PhoneBtn() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    document.body.style.overflow = "hidden";
    if (!window.matchMedia("(pointer: coarse)").matches) {
      document.body.style.width = "calc(100% - 6px)";
    }
    setOpen(true);
  };

  const handleClose = () => {
    document.body.style.overflowY = "auto";
    document.body.style.width = "100%";
    setOpen(false);
  };

  return (
    <>
      <div
        onClick={handleOpen}
        className="bg-[#242C3A] rounded-[12px] h-[64px] max-w-[320px] w-full flex items-center justify-center gap-[8px] cursor-pointer"
      >
        <Image
          src={"https://cdn.presscon.ai/newlanding/phone.svg"}
          alt="phone"
          width={24}
          height={24}
          className="w-[24px] h-[24px]"
        />
        <p className="text-[18px] leading-[30px] font-semibold text-[#FFF]">
          전화 상담하기
        </p>
      </div>

      <div
        className={`${
          open ? "" : "hidden"
        } fixed top-0 left-0 w-[100dvw] h-[100dvh] flex items-center justify-center transition-all`}
        style={{ background: "rgba(44, 44, 51, 0.30)" }}
      >
        <div className="max-w-[412px] bg-[#FFF] max-h-[290px] w-full h-full rounded-[24px] p-[24px] text-center">
          <div>
            <Image
              src={"/icons/close.svg"}
              alt="close"
              width={24}
              height={24}
              className="w-[24px] h-[24px] ml-auto cursor-pointer"
              onClick={handleClose}
            />
          </div>

          <p className="text-[24px] leading-[34px] font-bold text-[#000] mb-[16px] mt-[8px]">
            프레스콘 Ai 운영팀
          </p>

          <Link
            href="tel:+07050971656"
            className="flex items-center justify-center gap-[5px]"
          >
            <p className="text-[16px] leading-[32px] font-semibold text-[#555560]">
              📞
            </p>
            <p className="text-[20px] leading-[32px] font-semibold text-[#555560]">
              070-5097-1656
            </p>
          </Link>

          <Link
            href="tel:+01068221180"
            className="flex items-center justify-center gap-[5px]"
          >
            <p className="text-[16px] leading-[32px] font-semibold text-[#555560]">
              📞
            </p>
            <p className="text-[20px] leading-[32px] font-semibold text-[#555560]">
              010-6822-1180
            </p>
          </Link>

          <div
            onClick={handleClose}
            className="bg-[#1C6BFF] rounded-[10px] h-[56px] w-full flex items-center justify-center mt-[40px] cursor-pointer"
          >
            <p className="text-[16px] leading-[24px] font-medium text-[#FFF]">
              확인
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneBtn;