"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const barIcon = "https://cdn.presscon.ai/newlanding/bar.svg";

const Footer = () => {
  const [data, setData] = useState();
  const [modal, setModal] = useState("");
  const closeModal = () => {
    document.body.style.overflowY = "auto";
    document.body.style.width = "100%";
    setModal("");
  };

  const openModal = (event) => () => {
    document.body.style.overflow = "hidden";
    if (!window.matchMedia("(pointer: coarse)").matches) {
      document.body.style.width = "calc(100% - 6px)";
    }

    setModal(event);
  };

  const initData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/masterdata/settings`
      );
      const data = await res.json();
      localStorage.setItem("settings", data?.data);
      setData(data?.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    initData();
  }, []);
  return (
    <div
      id="footer"
      className="bg-[#222] px-[20px] py-[80px] xl:p-[80px] w-full"
    >
      <div className="flex xl:flex-row max-w-[1370px] mx-auto flex-col xl:justify-between xl:items-start items-center  gap-y-[40px]">
        <Image
          src="https://cdn.presscon.ai/newlanding/logo2.png"
          className="w-[165px] h-[20px] cursor-pointer"
          width={165}
          height={20}
          alt="logo2"
        />

        <div className="text-[#9397A1] text-[14px] leading-[22px] xl:text-left text-center sm:max-w-[832px] w-full max-w-[335px]">
          <div className="flex xl:flex-nowrap flex-wrap text-nowrap xl:justify-start justify-center items-center gap-[4px]">
            <div className="flex gap-[8px]">
              <p className="font-semibold">법인명</p>
              <p>TDI</p>
            </div>
            <Image
              src={barIcon}
              className="max-w-[16px] w-full h-auto "
              width={0}
              height={0}
              alt="logo2"
            />
            <div className="flex gap-[8px]">
              <p className="font-semibold">서비스명</p>
              <p>프레스콘 Ai</p>
            </div>
            <Image
              src={barIcon}
              className="max-w-[16px] w-full h-auto "
              width={0}
              height={0}
              alt="logo2"
            />
            <div className="flex gap-[8px]">
              <p className="font-semibold">대표이사</p>
              <p>신성균</p>
            </div>
            <Image
              src={barIcon}
              className="max-w-[16px] w-full h-auto "
              width={0}
              height={0}
              alt="logo2"
            />
            <div className="flex gap-[8px]">
              <p className="font-semibold">사업자번호</p>
              <p>617-81-95610</p>

              <div
                className="font-semibold underline underline-offset-2 cursor-pointer"
                onClick={() => {
                  var url =
                    "http://www.ftc.go.kr/bizCommPop.do?wrkr_no=" + 6178195610;
                  window.open(url, "bizCommPop", "width=750, height=700;");
                }}
              >
                사업자정보확인
              </div>
            </div>
            <Image
              src={barIcon}
              className="max-w-[16px] w-full h-auto "
              width={0}
              height={0}
              alt="logo2"
            />
            <div className="flex gap-[8px]">
              <p className="font-semibold">통신판매업 신고번호</p>
              <p>제 2012-부산해운-004 호</p>
            </div>
            <Image
              src={barIcon}
              className="max-w-[16px] w-full h-auto xl:hidden"
              width={0}
              height={0}
              alt="logo2"
            />
          </div>
          <div className="flex gap-[8px] mt-[8px] xl:justify-start justify-center">
            <p className="font-semibold xl:block hidden">주소</p>
            <p>
              <span className="font-semibold xl:hidden">주소 </span>
              부산광역시 해운대구 센텀중앙로 78,
              <br className="sm:hidden block" /> 1302호 (우동, 센텀그린타워)
              <br />
              (서울지사) 서울특별시 서초구 반포대로 20길 29
            </p>
          </div>

          <div className="flex flex-wrap items-center xl:justify-start justify-center gap-[4px] mt-[8px]">
            <Image
              src={barIcon}
              className="max-w-[16px] w-full h-auto xl:hidden "
              width={0}
              height={0}
              alt="logo2"
            />
            <div className="flex gap-[8px]">
              <p className="font-semibold">Tel</p>
              <p>070-5097-1656</p>
            </div>
            <Image
              src={barIcon}
              className="max-w-[16px] w-full h-auto "
              width={0}
              height={0}
              alt="logo2"
            />
            <div className="flex gap-[8px]">
              <p className="font-semibold">E-mail</p>
              <p>info.presscon@presscon.ai</p>
            </div>
          </div>
          <p className="mt-[12px] text-[#5F646F]">
            © 2024 Presscon. All Rights Reserved.
          </p>
        </div>

        <div className="text-white text-[14px] leading-[22px] xl:flex-col flex-row flex justify-center gap-[8px] xl:text-right xl:max-w-[97px] w-full">
          <p
            onClick={openModal("term")}
            className="underline underline-offset-1 cursor-pointer"
          >
            이용약관
          </p>
          <p
            onClick={openModal("policy")}
            className="underline underline-offset-1 cursor-pointer"
          >
            개인정보처리방침
          </p>
        </div>
      </div>

      {modal ? (
        <div
          id="modalTerm"
          className={`w-screen fixed z-[100] top-0 left-0 h-[100dvh] xl:p-[24px] p-[24px] flex justify-center items-center transition-all ${
            modal && "show"
          }`}
          style={{ background: "rgba(44, 44, 51, 0.30)" }}
          onClick={closeModal}
        >
          <div
            className="max-w-[600px] w-full xl:max-h-[842px] flex flex-col p-[24px] pt-[22px] bg-white rounded-[24px] transition-all"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex justify-between items-center">
              <div className="text-[18px] font-[600] text-[#222]">
                {modal === "term" ? "서비스 이용 약관" : "개인정보처리방침"}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onClick={closeModal}
                className="cursor-pointer"
              >
                <path
                  d="M5.17072 18.8289L18.8287 5.17094"
                  stroke="#222222"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.17107 5.17072L18.829 18.8287"
                  stroke="#222222"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="term mt-[20px] overflow-y-auto overflow-x-hidden xl:max-h-[671px] h-full w-full max-h-[calc(100dvh-200px)] mr-[-24px] pr-[8px]">
              {modal === "term" && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.service_terms_of_service,
                  }}
                ></div>
              )}

              {modal === "policy" && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.service_privacy_policy,
                  }}
                ></div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Footer;