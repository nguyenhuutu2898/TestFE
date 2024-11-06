"use client";

import Image from "next/image";
import Input from "./Input";
import { useEffect, useState } from "react";

const initForm = {
  company_name: "",
  domain: "",
  contact_name: "",
  email: "",
  content: "",
};

const FormInquiry = () => {
  const [touched, setTouched] = useState();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initForm);
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
    setValues(initForm);
    setOpen(false);
  };

  const setFieldValue = (key, value) => {
    if (key === "email") {
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
        setErrors({ email: "이메일 형식이 올바르지 않습니다" });
      } else {
        setErrors({});
      }
    }
    setValues({ ...values, [key]: value });
  };

  const setFieldTouched = (key, value) => {
    setTouched({ ...touched, [key]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/inquiry-homepage`,
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Accept-language": "ko",
          },
          body: JSON.stringify(values),
        }
      );
      const data = await res.json();
      if (data?.data) {
        handleClose();
        const alert = document.getElementById("alert");
        alert.classList.add("show");
        setTimeout(() => {
          alert.classList.remove("show");
        }, 3000);
      } else {
        setErrors(data?.errors);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const inquiry = document.getElementById("inquiry");

    inquiry.addEventListener("click", handleOpen);
    return () => inquiry.removeEventListener("click", handleOpen);
  }, []);
  return (
    <div
      id="modal"
      className={`w-screen fixed z-[100] top-0 left-0 h-[100dvh] xl:p-[24px] p-[24px] flex justify-center items-center transition-all ${
        open && "show"
      }`}
      style={{ background: "rgba(44, 44, 51, 0.30)" }}
      onClick={handleClose}
    >
      <div
        className="max-w-[856px] max-h-[calc(100dvh_-_40px)] flex flex-col w-full xl:p-[40px] p-[4px] bg-white rounded-[24px] transition-all h-[764px] sm:h-[660px] xl:h-[734px]"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex justify-between items-center xl:p-0 p-[16px] pb-0">
          <p className="xl:text-[32px] xl:leading-[44px] text-[24px] leading-[32px] font-bold text-black">
            문의하기
          </p>
          <Image
            src="https://cdn.cms.newshub.kr/prod/images-landingpage/icons/close.svg"
            className="w-[24px] h-[24px] cursor-pointer"
            width={24}
            height={24}
            alt="close"
            onClick={handleClose}
          />
        </div>
        <form className="space-y-[24px] flex-1 h-full overflow-y-auto xl:p-0 p-[16px] pt-0 mt-[24px]">
          <div className="grid sm:grid-cols-2 gap-[16px]">
            <Input
              value={values?.company_name}
              label="언론사명"
              setFieldValue={setFieldValue}
              handleBlur={() => setFieldTouched("company_name", true)}
              onFocus={() => setFieldTouched("company_name", false)}
              name="company_name"
              placeholder="언론사명을 입력해 주세요"
              error={
                touched?.company_name && errors?.company_name
                  ? errors?.company_name
                  : ""
              }
              labelClassName={"font-semibold"}
              maxLength={50}
            />
            <Input
              value={values?.domain}
              label="도메인"
              setFieldValue={setFieldValue}
              handleBlur={() => setFieldTouched("domain", true)}
              onFocus={() => setFieldTouched("domain", false)}
              name="domain"
              placeholder="도메인을 입력해 주세요"
              error={touched?.domain && errors?.domain ? errors?.domain : ""}
              labelClassName={"font-semibold"}
              maxLength={50}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-[16px]">
            <Input
              value={values?.contact_name}
              label="담당자"
              setFieldValue={setFieldValue}
              handleBlur={() => setFieldTouched("contact_name", true)}
              onFocus={() => setFieldTouched("contact_name", false)}
              name="contact_name"
              placeholder="담당자를 입력해 주세요"
              error={
                touched?.contact_name && errors?.contact_name
                  ? errors?.contact_name
                  : ""
              }
              labelClassName={"font-semibold"}
              maxLength={50}
            />

            <Input
              value={values?.email}
              label="이메일"
              setFieldValue={setFieldValue}
              handleBlur={() => setFieldTouched("email", true)}
              onFocus={() => setFieldTouched("email", false)}
              name="email"
              placeholder="이메일 주소를 입력해 주세요"
              error={touched?.email && errors?.email ? errors?.email : ""}
              labelClassName={"font-semibold"}
              maxLength={50}
            />
          </div>

          <Input
            value={values?.content}
            label="내용"
            setFieldValue={setFieldValue}
            handleBlur={() => setFieldTouched("content", true)}
            onFocus={() => setFieldTouched("content", false)}
            textArea
            name="content"
            placeholder="내용을 입력해 주세요"
            error={touched?.content && errors?.content ? errors?.content : ""}
            labelClassName={"font-semibold"}
            maxLength={5000}
          />

          <div
            onClick={handleSubmit}
            disabled={
              Object.keys(errors)?.length ||
              Object.values(values).find((i) => !i) !== undefined
            }
            className={`${
              Object.keys(errors)?.length ||
              Object.values(values).find((i) => !i) !== undefined
                ? "bg-[#E2E5EB] text-[#9397A1]"
                : "bg-[#1C6BFF] text-[#FFF]"
            } max-w-[240px] w-full px-[24px] py-[16px] rounded-[12px] flex justify-center items-center mx-auto xl:!mt-[40px] !mt-[32px] cursor-pointer`}
          >
            <p className="text-[18px] leading-[28px] font-medium">문의하기</p>
          </div>
        </form>
      </div>

      <div
        id="alert"
        className="fixed xl:top-[55px] sm:top-[40px] top-[20px] left-0 w-full z-[99]"
      >
        <div className="mx-auto xl:max-w-[600px] sm:max-w-[416px] max-w-[295px] w-full h-[48px] flex items-center bg-[#D7F6EF] px-[14px] rounded-[4px] gap-[6px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="11" stroke="#17B78F" strokeWidth="1.5" />
            <path
              d="M17.5 8.5L10.5 17L6 12.5"
              stroke="#17B78F"
              strokeWidth="1.7"
              strokeLinecap="square"
              strokeLinejoin="bevel"
            />
          </svg>

          <p className="text-[16px] leading-[22px] font-medium text-[#16B18B]">
            서비스 문의가 완료되었습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormInquiry;