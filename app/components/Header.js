import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div
      id="header"
      className="absolute top-0 z-[60] xl:px-[40px] xl:py-[20px] px-[20px] py-[12px] flex justify-between items-center w-[100dvw] h-[56px] xl:h-[80px]"
    >
      <Link href={"/"}>
        <Image
          src="https://cdn.presscon.ai/newlanding/logo_header.svg"
          className="xl:h-[20px] h-[14px] xl:w-[165px] w-[115.5px] cursor-pointer"
          width={165}
          height={20}
          priority
          alt="logo"
        />
      </Link>
      <div className="flex items-center gap-[20px] justify-end">
        <Link
          href={process.env.NEXT_PUBLIC_CLIENT}
          className="flex items-center justify-center px-[12px] py-[8px] xl:px-[24px] xl:py-[8px] rounded-[10px] bg-[#1C6BFF] cursor-pointer w-[110px] h-[34px] xl:w-[149px] xl:h-10"
        >
          <p className="text-white text-[12px] leading-[18px] xl:text-[14px] xl:leading-[24px] font-medium whitespace-nowrap">
            홈페이지 바로가기
          </p>
        </Link>
      </div>
    </div>
  );
};
export default Header;