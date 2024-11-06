import Image from "next/image";
import { useState } from "react";

const Input = ({
  value,
  placeholder,
  label,
  type = "text",
  allowClear,
  textIcon,
  error,
  success,
  setFieldValue,
  handleBlur,
  name,
  required,
  textArea,
  labelClassName,
  ...props
}) => {
  const [show, setShow] = useState(false);

  const handleClear = () => {
    setFieldValue(name, "");
  };

  const handeleShowPass = () => {
    setShow((props) => !props);
  };

  const handleChangeText = (event) => {
    setFieldValue(name, event?.target?.value || "");
  };
  return (
    <div>
      {label && (
        <p
          className={`xl:text-[18px] xl:leading-[26px] text-[16px] leading-[24px] font-medium text-[#222] flex items-center mb-[8px] ${labelClassName}`}
        >
          {label}{" "}
          {required ? (
            <Image
              src="https://cdn.cms.newshub.kr/prod/images-landingpage/icons/required.svg"
              className="w-[16px] h-[16px]"
              width={16}
              height={16}
              alt="required"
            />
          ) : null}
        </p>
      )}

      <div
        className={`flex items-center border  py-[8px] px-[16px] border-[#D3D5DB] rounded-[12px] ${
          textArea ? "h-[240px]" : "h-[48px]"
        }`}
      >
        {textArea ? (
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChangeText}
            className="flex-1 w-full border-transparent focus:border-transparent outline-none h-full"
            required={required}
            onBlur={handleBlur}
            {...props}
          />
        ) : (
          <input
            name={name}
            placeholder={placeholder}
            value={value}
            type={show ? "text" : type}
            onChange={handleChangeText}
            className="flex-1 w-full border-transparent focus:border-transparent outline-none"
            required={required}
            onBlur={handleBlur}
            {...props}
          />
        )}

        <div className="flex gap-[16px] items-center">
          {allowClear && value && (
            <Image
              src={
                "https://cdn.cms.newshub.kr/prod/images-landingpage/icons/clear.svg"
              }
              width={24}
              height={24}
              className="w-[24px] h-[24px] cursor-pointer"
              alt="iconClear"
              onClick={handleClear}
            />
          )}

          {type === "password" ? (
            <Image
              src={
                show
                  ? "https://cdn.cms.newshub.kr/prod/images-landingpage/icons/show.svg"
                  : "https://cdn.cms.newshub.kr/prod/images-landingpage/icons/hide.svg"
              }
              width={24}
              height={24}
              className="w-[24px] h-[24px] cursor-pointer"
              alt="iconHide"
              onClick={handeleShowPass}
            />
          ) : textIcon ? (
            <div className="bg-neural20 rounded-[8px] px-[12px] py-[8px] min-w-[73px] flex justify-center items-center">
              <p className="text-[14px] leading-[24px] font-medium text-neural70">
                {textIcon}
              </p>
            </div>
          ) : null}
        </div>
      </div>

      {(!!success || !!error) && (
        <div className="flex items-center gap-[4px] mt-[8px]">
          <Image
            src={
              error
                ? "https://cdn.cms.newshub.kr/prod/images-landingpage/icons/error.svg"
                : success
                ? "https://cdn.cms.newshub.kr/prod/images-landingpage/icons/success.svg"
                : ""
            }
            width={16}
            height={16}
            className="w-[16px] h-[16px]"
            alt="iconSuccess"
          />
          <p
            className={`font-medium text-[12px] leading-[18px] ${
              error && "text-[#FD5252]"
            } ${success && "text-[#00B22B]"}`}
          >
            {error ? error : success ? success : ""}
          </p>
        </div>
      )}
    </div>
  );
};

export default Input;