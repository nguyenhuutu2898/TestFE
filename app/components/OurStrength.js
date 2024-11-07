"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const OurStrength = () => {
  const [step, setStep] = useState(0);

  const handleStep = (value) => () => {
    setStep(value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStep((prevStep) => (prevStep < 4 ? prevStep + 1 : 1));
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [step]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setStep((props) => props || 1);

          return;
        }
      });
    });
    const ourStrength = document.getElementById("ourStrength");
    observer.observe(ourStrength);
  }, []);
  return (
    <div className="flex justify-between w-full h-full">
      <div className="w-[48px] relative mb-[90px]">
        <div className="relative z-[1]">
          <div
            className={`${
              step === 1
                ? "bg-[#1C6BFF] text-white border-[#1C6BFF]"
                : "bg-[#DAE2F3] text-[#8B99B1] border-[#D0D9EE]"
            } border w-[48px] h-[48px] flex justify-center items-center rounded-[24px] cursor-pointer`}
            onClick={handleStep(1)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.4762 20.1031L17.8611 16.5151C19.2644 14.7644 19.9439 12.5423 19.7601 10.3056C19.5762 8.069 18.5429 5.98784 16.8726 4.49011C15.2023 2.99237 13.0219 2.1919 10.7799 2.25329C8.53788 2.31467 6.40456 3.23325 4.81861 4.82014C3.23267 6.40703 2.31463 8.54162 2.25328 10.785C2.19193 13.0283 2.99193 15.21 4.48878 16.8813C5.98562 18.5526 8.06554 19.5865 10.3009 19.7705C12.5362 19.9544 14.757 19.2745 16.5067 17.8704L20.0925 21.4584C20.1831 21.5498 20.2909 21.6223 20.4096 21.6718C20.5284 21.7213 20.6557 21.7468 20.7844 21.7468C20.913 21.7468 21.0404 21.7213 21.1591 21.6718C21.2778 21.6223 21.3856 21.5498 21.4762 21.4584C21.6518 21.2766 21.75 21.0336 21.75 20.7808C21.75 20.5279 21.6518 20.2849 21.4762 20.1031ZM11.0402 17.8704C9.6911 17.8704 8.37234 17.4701 7.25064 16.7202C6.12894 15.9702 5.25468 14.9043 4.73842 13.6572C4.22216 12.4101 4.08708 11.0378 4.35027 9.71389C4.61346 8.38997 5.26309 7.17387 6.21702 6.21937C7.17094 5.26488 8.38632 4.61486 9.70945 4.35152C11.0326 4.08817 12.404 4.22333 13.6504 4.7399C14.8968 5.25647 15.9621 6.13125 16.7116 7.25361C17.4611 8.37598 17.8611 9.69552 17.8611 11.0454C17.8611 12.8555 17.1425 14.5914 15.8633 15.8714C14.5841 17.1513 12.8492 17.8704 11.0402 17.8704Z"
                fill="currentColor"
              />
              <ellipse
                cx="10.607"
                cy="11.3029"
                rx="7.66071"
                ry="7.66072"
                fill="currentColor"
                fillOpacity="0.3"
              />
            </svg>
          </div>
          <div className="absolute top-0 left-[58px] w-[349px] flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="17"
              viewBox="0 0 15 17"
              fill="none"
              className={`${
                step === 1 ? "opacity-100" : "opacity-0"
              } min-w-[14.5px] mt-[15.5px] mr-[-2.5px]`}
            >
              <path
                d="M1 6.33311C-0.333333 7.10291 -0.333334 9.02741 0.999999 9.79721L11.5 15.8594C12.8333 16.6292 14.5 15.6669 14.5 14.1273L14.5 2.00299C14.5 0.463384 12.8333 -0.498868 11.5 0.270933L1 6.33311Z"
                fill="white"
              />
            </svg>
            <div
              className={`max-w-[337px] w-full rounded-[10px] p-[20px] ${
                step === 1 ? "bg-[#FFF]" : ""
              }`}
            >
              <p
                className={`${
                  step === 1 ? "text-[#222]" : "text-[#67758E]"
                } text-[18px] leading-[28px] font-bold`}
              >
                SEO 점수와 통계를 한눈에
              </p>

              <p
                className={`${
                  step === 1 ? "text-[#60636C]" : "text-[#959DB0]"
                } text-[16px] leading-[24px] font-medium mt-[4px]`}
              >
                기사, 광고 수익, 댓글, 기자 현황, 주요 데이터를 <br />
                직관적으로 확인할 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[96px]">
          <div
            className={`${
              step === 1 ? "animation1" : ""
            } w-[5px] h-0 mx-auto rounded-b-[5px]`}
          ></div>
        </div>

        <div className="relative z-[1]">
          <div
            className={`${
              step === 2
                ? "bg-[#1C6BFF] text-white border-[#1C6BFF]"
                : "bg-[#DAE2F3] text-[#A6BADC] border-[#D0D9EE]"
            } border w-[48px] h-[48px] flex justify-center items-center rounded-[24px] cursor-pointer`}
            onClick={handleStep(2)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8571 2.7143C12.8571 2.16201 13.3065 1.7085 13.8555 1.76871C18.0583 2.22964 21.3953 5.56661 21.8562 9.76946C21.9164 10.3185 21.4629 10.7679 20.9106 10.7679H13.8571C13.3048 10.7679 12.8571 10.3201 12.8571 9.76786V2.7143Z"
                fill={step === 2 ? "#6097FF" : "#8B99B1"}
              />
              <path
                d="M10.5731 3.14043C11.1221 3.07986 11.5715 3.53341 11.5715 4.08569V11.0857C11.5715 11.638 12.0192 12.0857 12.5715 12.0857H19.5715C20.1238 12.0857 20.5774 12.5351 20.5168 13.0841C20.0202 17.5852 16.2051 21.0857 11.5715 21.0857C6.60053 21.0857 2.57153 17.0567 2.57153 12.0857C2.57153 7.45216 6.07207 3.63706 10.5731 3.14043Z"
                fill="currentColor"
                stroke="currentColor"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="absolute top-0 left-[58px] w-[349px] flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="17"
              viewBox="0 0 15 17"
              fill="none"
              className={`${
                step === 2 ? "opacity-100" : "opacity-0"
              } min-w-[14.5px] mt-[15.5px] mr-[-2.5px]`}
            >
              <path
                d="M1 6.33311C-0.333333 7.10291 -0.333334 9.02741 0.999999 9.79721L11.5 15.8594C12.8333 16.6292 14.5 15.6669 14.5 14.1273L14.5 2.00299C14.5 0.463384 12.8333 -0.498868 11.5 0.270933L1 6.33311Z"
                fill="white"
              />
            </svg>
            <div
              className={`max-w-[337px] w-full rounded-[10px] p-[20px] ${
                step === 2 ? "bg-[#FFF]" : ""
              }`}
            >
              <p
                className={`${
                  step === 2 ? "text-[#222]" : "text-[#67758E]"
                } text-[18px] leading-[28px] font-bold`}
              >
                통계데이터 심층 분석 제공
              </p>

              <p
                className={`${
                  step === 2 ? "text-[#60636C]" : "text-[#959DB0]"
                } text-[16px] leading-[24px] font-medium mt-[4px]`}
              >
                작성된 기사의 조회 수, 기사 로그 등 통계를 <br />
                제공하여, 콘텐츠 성과를 분석할 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[96px]">
          <div
            className={`${
              step === 2 ? "animation1" : ""
            } w-[5px] h-0 mx-auto rounded-b-[5px]`}
          ></div>
        </div>

        <div className="relative z-[1]">
          <div
            className={`${
              step === 3
                ? "bg-[#1C6BFF] text-white border-[#1C6BFF]"
                : "bg-[#DAE2F3] text-[#8B99B1] border-[#D0D9EE]"
            } border w-[48px] h-[48px] flex justify-center items-center rounded-[24px] cursor-pointer`}
            onClick={handleStep(3)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 17.4605V20.5001C21 20.78 20.78 21 20.5001 21H17.4605C17.3305 21 17.2005 20.95 17.1105 20.85L6.19206 9.94154L9.94153 6.19206L20.85 17.1005C20.95 17.2005 21 17.3205 21 17.4605ZM3.29246 7.04194C2.90251 6.65199 2.90251 6.02208 3.29246 5.63213L5.63213 3.29246C6.02208 2.90251 6.65199 2.90251 7.04194 3.29246L8.87168 5.12221L5.12221 8.87168L3.29246 7.04194Z"
                fill="currentColor"
              />
              <path
                d="M21 17.4605V20.5001C21 20.78 20.78 21 20.5001 21H17.4605C17.3305 21 17.2005 20.95 17.1105 20.85L6.19206 9.94154L9.94153 6.19206L20.85 17.1005C20.95 17.2005 21 17.3205 21 17.4605ZM3.29246 7.04194C2.90251 6.65199 2.90251 6.02208 3.29246 5.63213L5.63213 3.29246C6.02208 2.90251 6.65199 2.90251 7.04194 3.29246L8.87168 5.12221L5.12221 8.87168L3.29246 7.04194Z"
                stroke="currentColor"
              />
            </svg>
          </div>
          <div className="absolute top-0 left-[58px] w-[349px] flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="17"
              viewBox="0 0 15 17"
              fill="none"
              className={`${
                step === 3 ? "opacity-100" : "opacity-0"
              } min-w-[14.5px] mt-[15.5px] mr-[-2.5px]`}
            >
              <path
                d="M1 6.33311C-0.333333 7.10291 -0.333334 9.02741 0.999999 9.79721L11.5 15.8594C12.8333 16.6292 14.5 15.6669 14.5 14.1273L14.5 2.00299C14.5 0.463384 12.8333 -0.498868 11.5 0.270933L1 6.33311Z"
                fill="white"
              />
            </svg>
            <div
              className={`max-w-[337px] w-full rounded-[10px] p-[20px] ${
                step === 3 ? "bg-[#FFF]" : ""
              }`}
            >
              <p
                className={`${
                  step === 3 ? "text-[#222]" : "text-[#67758E]"
                } text-[18px] leading-[28px] font-bold`}
              >
                간편한 수정 시스템에서 편집
              </p>

              <p
                className={`${
                  step === 3 ? "text-[#60636C]" : "text-[#959DB0]"
                } text-[16px] leading-[24px] font-medium mt-[4px] text-nowrap`}
              >
                서비스 화면 내 홈페이지 편집 가능 ‘프레스콘 Ai’
                <br />
                운영팀이 실시간으로 문의에 대응해 드립니다.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[96px]">
          <div
            className={`${
              step === 3 ? "animation1" : ""
            } w-[5px] h-0 mx-auto rounded-b-[5px]`}
          ></div>
        </div>

        <div className="relative z-[1]">
          <div
            className={`${
              step === 4
                ? "bg-[#1C6BFF] text-white border-[#1C6BFF]"
                : "bg-[#DAE2F3] text-[#8B99B1] border-[#D0D9EE]"
            } border w-[48px] h-[48px] flex justify-center items-center rounded-[24px] cursor-pointer`}
            onClick={handleStep(4)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5Z"
                fill="currentColor"
              />
              <path
                d="M8.75342 16.4383H13.0322C14.2521 16.4383 15.2373 15.453 15.2373 14.2332C15.2373 13.0134 14.2521 12.0281 13.0322 12.0281H10.9585C9.73867 12.0281 8.75342 11.0429 8.75342 9.82301C8.75342 8.60317 9.73867 7.61792 10.9585 7.61792H15.2373"
                fill="currentColor"
              />
              <path
                d="M8.75342 16.4383H13.0322C14.2521 16.4383 15.2373 15.453 15.2373 14.2332C15.2373 13.0134 14.2521 12.0281 13.0322 12.0281H10.9585C9.73867 12.0281 8.75342 11.0429 8.75342 9.82301C8.75342 8.60317 9.73867 7.61792 10.9585 7.61792H15.2373"
                stroke={step === 4 ? "#1C6BFF" : "#F1F6FF"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5.97583V18.0241"
                stroke={step === 4 ? "#1C6BFF" : "#F1F6FF"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="absolute top-0 left-[58px] w-[349px] flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="17"
              viewBox="0 0 15 17"
              fill="none"
              className={`${
                step === 4 ? "opacity-100" : "opacity-0"
              } min-w-[14.5px] mt-[15.5px] mr-[-2.5px]`}
            >
              <path
                d="M1 6.33311C-0.333333 7.10291 -0.333334 9.02741 0.999999 9.79721L11.5 15.8594C12.8333 16.6292 14.5 15.6669 14.5 14.1273L14.5 2.00299C14.5 0.463384 12.8333 -0.498868 11.5 0.270933L1 6.33311Z"
                fill="white"
              />
            </svg>
            <div
              className={`max-w-[337px] w-full rounded-[10px] p-[20px] ${
                step === 4 ? "bg-[#FFF]" : ""
              }`}
            >
              <p
                className={`${
                  step === 4 ? "text-[#222]" : "text-[#67758E]"
                } text-[18px] leading-[28px] font-bold`}
              >
                나의 수익 현황을 즉시 확인
              </p>

              <p
                className={`${
                  step === 4 ? "text-[#60636C]" : "text-[#959DB0]"
                } text-[16px] leading-[24px] font-medium mt-[4px]`}
              >
                광고 성과를 실시간으로 확인할 수 있으며,
                <br />
                자동으로 광고 수익을 최적화 해 드립니다.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div
            className="w-[5px] h-full mx-auto"
            style={{ background: "rgba(208, 217, 238, 0.33)" }}
          ></div>
        </div>
      </div>

      <div className="flex-1 w-full h-fit relative">
        {/* {step === 1 && ( */}
        <div className="absolute top-0 w-full h-fit">
          <Image
            src={"https://cdn.presscon.ai/newlanding/image_step1.webp"}
            alt="image_step1"
            width={952}
            height={570}
            className={`max-w-[952px] max-h-[570px] h-full w-full ml-auto transition-all duration-300 ease-out ${
              step === 1 ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="absolute top-0 w-full h-fit">
          <Image
            src={"https://cdn.presscon.ai/newlanding/image_step2.webp"}
            alt="image_step1"
            width={952}
            height={570}
            className={`max-w-[952px] max-h-[570px] h-full w-full ml-auto transition-all duration-300 ease-out ${
              step === 2 ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="absolute top-0 w-full h-fit">
          <Image
            src={"https://cdn.presscon.ai/newlanding/image_step3.webp"}
            alt="image_step1"
            width={952}
            height={570}
            className={`max-w-[952px] max-h-[570px] h-full w-full ml-auto transition-all duration-300 ease-out ${
              step === 3 ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="absolute top-0 w-full h-fit">
          <Image
            src={"https://cdn.presscon.ai/newlanding/image_step4.webp"}
            alt="image_step1"
            width={952}
            height={570}
            className={`max-w-[952px] max-h-[570px] h-full w-full ml-auto transition-all duration-300 ease-out ${
              step === 4 ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default OurStrength;
