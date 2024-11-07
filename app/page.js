import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
// import OurStrength from "./components/OurStrength";
// import FormInquiry from "./components/FormInquiry";
// import PhoneBtn from "./components/PhoneBtn";
const OurStrength = dynamic(() => import("./components/OurStrength"));
const PhoneBtn = dynamic(() => import("./components/PhoneBtn"));
const FormInquiry = dynamic(() => import("./components/FormInquiry"));

export default function Home() {
  return (
    <div>
      <div className="bg-[#FFF]">
        <div
          className="text-center pt-[160px] pb-[162px]"
          style={{
            background:
              "radial-gradient(102.45% 102.45% at 49.45% 100%, rgba(0, 71, 205, 0.36) 0%, rgba(0, 0, 0, 0.36) 100%), linear-gradient(0deg, #003A73 -36.06%, #0E0E0E 74.21%)",
          }}
        >
          <p className="text-[56px] leading-[76px] text-[#FFF] font-bold">
            언론사의 미래,
            <br /> Presscon <span className="text-[#1C6BFF]">Ai</span> 로 혁신을
            경험하세요!
          </p>

          <p className="text-[20px] leading-[28px] font-medium text-[#C2C5D4] mt-[36px]">
            AI 기자가 작성한 빠르고 정확한 기사, 최상의 콘텐츠 생산 효율을
            제공합니다.
          </p>

          <div className="flex justify-center gap-[48px] mt-[160px]">
            <div
              className="rounded-[20px] pt-[32px] pl-[32px] pr-[20px] pb-[20px] max-w-[367px] w-full max-h-[382px] h-full text-left border-[3px] border-[#FFF] border-opacity-[0.13]"
              style={{
                background: "rgba(255, 255, 255, 0.13)",
                backdropFilter: "blur(65px)",
              }}
            >
              <div className="bg-[#081A35] rounded-[20px] max-w-[65px] w-full h-[28px] flex justify-center items-center">
                <p className="text-[13px] leading-[20px] font-bold text-[#FFF]">
                  제목추천
                </p>
              </div>

              <p className="text-[28px] leading-[38px] text-[#FFF] font-medium mt-[20px]">
                키워드를 기반으로 <br />
                <span className="font-bold">제목을 완성 해 주는 AI</span>
              </p>

              <div className="mt-[26px]">
                <Image
                  src={"https://cdn.presscon.ai/newlanding/icon_chat.webp"}
                  alt="icon_chat"
                  priority
                  quality={90}
                  className="ml-auto max-w-[180px] w-full max-h-[180px] h-auto"
                  width={180}
                  height={180}
                />
              </div>
            </div>

            <div
              className="rounded-[20px] pt-[32px] pl-[32px] pr-[20px] pb-[20px] max-w-[367px] w-full max-h-[382px] h-full text-left border-[3px] border-[#FFF] border-opacity-[0.13]"
              style={{
                background: "rgba(255, 255, 255, 0.13)",
                backdropFilter: "blur(65px)",
              }}
            >
              <div className="bg-[#081A35] rounded-[20px] max-w-[65px] w-full h-[28px] flex justify-center items-center">
                <p className="text-[13px] leading-[20px] font-bold text-[#FFF]">
                  제목추천
                </p>
              </div>

              <p className="text-[28px] leading-[38px] text-[#FFF] font-medium mt-[20px]">
                키워드를 기반으로 <br />
                <span className="font-bold">제목을 완성 해 주는 AI</span>
              </p>

              <div className="mt-[26px]">
                <Image
                  src={"https://cdn.presscon.ai/newlanding/icon_write.webp"}
                  alt="icon_write"
                  priority
                  quality={90}
                  className="ml-auto max-w-[180px] w-full max-h-[180px] h-auto"
                  width={180}
                  height={180}
                />
              </div>
            </div>

            <div
              className="rounded-[20px] pt-[32px] pl-[32px] pr-[20px] pb-[20px] max-w-[367px] w-full max-h-[382px] h-full text-left border-[3px] border-[#FFF] border-opacity-[0.13]"
              style={{
                background: "rgba(255, 255, 255, 0.13)",
                backdropFilter: "blur(65px)",
              }}
            >
              <div className="bg-[#081A35] rounded-[20px] max-w-[65px] w-full h-[28px] flex justify-center items-center">
                <p className="text-[13px] leading-[20px] font-bold text-[#FFF]">
                  제목추천
                </p>
              </div>

              <p className="text-[28px] leading-[38px] text-[#FFF] font-medium mt-[20px]">
                키워드를 기반으로 <br />
                <span className="font-bold">제목을 완성 해 주는 AI</span>
              </p>

              <div className="mt-[26px]">
                <Image
                  src={"https://cdn.presscon.ai/newlanding/icon_photo.webp"}
                  alt="icon_photo"
                  priority
                  quality={90}
                  className="ml-auto max-w-[180px] w-full max-h-[180px] h-auto"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-[120px]">
          <p className="text-[24px] leading-[32px] font-bold text-[#8B99B1]">
            Our Service
          </p>

          <p className="text-[50px] leading-[70px] font-bold text-[#000] mt-[20px]">
            기사작성이 쉬워지는
          </p>

          <div className="flex justify-center items-center gap-[20px]">
            <Image
              src={"https://cdn.presscon.ai/newlanding/textLogo.svg"}
              alt="textLogo"
              width={269}
              height={40}
              className="max-w-[269px] w-full h-auto"
            />

            <p className="text-[50px] leading-[70px] font-bold text-[#000]">
              어떻게 활용하나요?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 mx-auto max-w-[1196px] w-full gap-[24px] mt-[60px]">
          <div className="rounded-[20px] max-w-[586px] max-h-[596px] w-full h-full bg-[#F6F7F9]">
            <div className="px-[70px] pt-[60px]">
              <div className="bg-[#000] rounded-[20px] px-[10px] w-fit h-[28px] flex justify-center items-center">
                <p className="text-[13px] leading-[20px] font-bold text-[#FFF]">
                  STEP 01
                </p>
              </div>

              <p className="mt-[32px] text-[32px] leading-[40px] font-bold text-[#000]">
                AI 기자의 제안
              </p>

              <p className="text-[#5F646F] text-[18px] leading-[28px] font-medium mt-[16px]">
                간단한 프롬프트 입력만으로,기사 제목부터 내용까지
                <br />
                AI 기자가 제안하는 최신 이슈 기사를 만나보세요.
              </p>
            </div>
            <div className="mt-[34px]">
              <Image
                src={"https://cdn.presscon.ai/newlanding/step1.webp"}
                alt="step1"
                width={586}
                height={330}
                className="w-full max-h-[330px] h-full"
              />
            </div>
          </div>

          <div className="rounded-[20px] max-w-[586px] max-h-[596px] w-full h-full bg-[#F6F7F9]">
            <div className="px-[70px] pt-[60px]">
              <div className="bg-[#000] rounded-[20px] px-[10px] w-fit h-[28px] flex justify-center items-center">
                <p className="text-[13px] leading-[20px] font-bold text-[#FFF]">
                  STEP 02
                </p>
              </div>

              <p className="mt-[32px] text-[32px] leading-[40px] font-bold text-[#000]">
                자동 기사 생성
              </p>

              <p className="text-[#5F646F] text-[18px] leading-[28px] font-medium mt-[16px]">
                선택한 제목을 기반으로 생성된 기사를 확인하고,
                <br />
                다른 제안을 보거나 다음 스텝으로 넘어갈 수 있어요.
              </p>
            </div>
            <div className="mt-[34px]">
              <Image
                src={"https://cdn.presscon.ai/newlanding/step2.webp"}
                alt="step2"
                width={586}
                height={330}
                className="w-full max-h-[330px] h-full"
              />
            </div>
          </div>

          <div className="rounded-[20px] max-w-[586px] max-h-[596px] w-full h-full bg-[#F6F7F9]">
            <div className="px-[70px] pt-[60px]">
              <div className="bg-[#000] rounded-[20px] px-[10px] w-fit h-[28px] flex justify-center items-center">
                <p className="text-[13px] leading-[20px] font-bold text-[#FFF]">
                  STEP 03
                </p>
              </div>

              <p className="mt-[32px] text-[32px] leading-[40px] font-bold text-[#000]">
                기사 맞춤 이미지 추천
              </p>

              <p className="text-[#5F646F] text-[18px] leading-[28px] font-medium mt-[16px]">
                저작권 이슈가 없는 무료 이미지를 추천해 드려요.
                <br />
                첨부 이미지를 선택하고, 리서치 시간을 줄여보세요!
              </p>
            </div>
            <div className="mt-[34px]">
              <Image
                src={"https://cdn.presscon.ai/newlanding/step3.webp"}
                alt="step3"
                width={586}
                height={330}
                className="w-full max-h-[330px] h-full"
              />
            </div>
          </div>

          <div className="rounded-[20px] max-w-[586px] max-h-[596px] w-full h-full bg-[#F6F7F9]">
            <div className="px-[70px] pt-[60px]">
              <div className="bg-[#000] rounded-[20px] px-[10px] w-fit h-[28px] flex justify-center items-center">
                <p className="text-[13px] leading-[20px] font-bold text-[#FFF]">
                  STEP 04
                </p>
              </div>

              <p className="mt-[32px] text-[32px] leading-[40px] font-bold text-[#000]">
                즉시 편집 및 기사 작성 최종화
              </p>

              <p className="text-[#5F646F] text-[18px] leading-[28px] font-medium mt-[16px]">
                Ai 기자가 생성한 기사를 당신의 색깔에 맞게
                <br />
                자유롭게 편집하고 빠르게 송고해 보세요!
              </p>
            </div>
            <div className="mt-[34px]">
              <Image
                src={"https://cdn.presscon.ai/newlanding/step4.webp"}
                alt="step4"
                width={586}
                height={330}
                className="w-full max-h-[330px] h-full"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#F1F6FF] mt-[66px] py-[120px]">
          <div className="max-w-[1440px] w-full mx-auto">
            <p className="text-[24px] leading-[32px] font-bold text-[#8B99B1]">
              Our Strength
            </p>

            <div className="flex items-center gap-[20px] mt-[20px]">
              <p className="text-[50px] leading-[70px] font-bold text-[#000]">
                믿을 수 있는
              </p>

              <Image
                src={"https://cdn.presscon.ai/newlanding/textLogo.svg"}
                alt="textLogo"
                width={269}
                height={40}
                className="max-w-[269px] w-full h-auto"
              />
            </div>

            <div className="flex mt-[60px]">
              <OurStrength />
            </div>
          </div>
        </div>

        <div className="py-[120px]">
          <div className="max-w-[1440px] w-full mx-auto">
            <p className="text-[24px] leading-[32px] font-bold text-[#8B99B1]">
              Our Review
            </p>

            <p className="text-[50px] leading-[70px] font-bold text-[#000] mt-[20px]">
              창의적인 뉴스의
              <br />
              미래를 열어드립니다.
            </p>

            <div className="flex mt-[60px]">
              <div className="max-w-[708px] w-full flex">
                <Image
                  src={"https://cdn.presscon.ai/newlanding/OurReview.webp"}
                  alt="OurReview"
                  width={342}
                  height={410}
                  className="max-w-[342px] w-full max-h-[410px] h-full rounded-l-[24px]"
                />

                <div className="bg-[#F6F7F9] px-[48px] py-[64px] rounded-r-[24px]">
                  <Image
                    src={"https://cdn.presscon.ai/newlanding/double_quotes.svg"}
                    alt="double_quotes"
                    width={20}
                    height={15}
                    className="w-[20px] h-[15px]"
                  />

                  <p className="text-[20px] leading-[30px] font-bold text-[#333D51] mt-[16px]">
                    통계기능으로
                    <br />
                    데이터를 한눈에 볼 수 있어요!
                  </p>

                  <p className="text-[18px] leading-[28px] font-medium text-[#60636C] mt-[18px]">
                    기사를 배포한 후 조회수나 반응을
                    <br />
                    실시간으로 추적할 수 있어서,
                    <br />
                    무엇이 효과적이고 어떤 주제에
                    <br />
                    독자들이 더 반응하는지 바로 알고
                    <br />
                    그에 맞춰 기사를 작성 할 수 있어요!
                  </p>

                  <p className="text-[16px] leading-[22px] text-[#666] mt-[10px]">
                    인터넷 언론사 000 기자
                  </p>
                </div>
              </div>

              <div className="max-w-[708px] w-full flex">
                <Image
                  src={"https://cdn.presscon.ai/newlanding/OurWrite.webp"}
                  alt="OurWrite"
                  width={342}
                  height={410}
                  className="max-w-[342px] w-full max-h-[410px] h-full rounded-l-[24px]"
                />

                <div className="bg-[#F6F7F9] px-[48px] py-[64px] rounded-r-[24px]">
                  <Image
                    src={"https://cdn.presscon.ai/newlanding/double_quotes.svg"}
                    alt="double_quotes"
                    width={20}
                    height={15}
                    className="w-[20px] h-[15px]"
                  />

                  <p className="text-[20px] leading-[30px] font-bold text-[#333D51] mt-[16px]">
                    키워드 분석으로
                    <br />
                    기사작성이 쉬워졌어요!
                  </p>

                  <p className="text-[18px] leading-[28px] font-medium text-[#60636C] mt-[18px]">
                    프레스콘 AI를 도입하고 난 이후에
                    <br />
                    많은 것들이 달라졌습니다.
                    <br />
                    매일 SEO 점수를 확인하고
                    <br />
                    SEO 점수의 상승곡선을 경험하며
                    <br />
                    많은 도움이 되었습니다.
                  </p>

                  <p className="text-[16px] leading-[22px] text-[#666] mt-[10px]">
                    인터넷 언론사 000 기자
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="py-[120px] bg-[#000]"
          style={{
            background:
              "radial-gradient(circle at 20% 40%, #0b223e 10%, transparent 60%), radial-gradient(circle at 80% 60%, #0b223e 10%, transparent 60%)",
            backgroundColor: "#000",
          }}
        >
          <div className="max-w-[1440px] w-full mx-auto text-center">
            <p className="text-[24px] leading-[32px] font-bold text-[#8B99B1]">
              Synergy Effect
            </p>

            <Image
              src={"https://cdn.presscon.ai/newlanding/textLogo_white.svg"}
              alt="textLogo_white"
              width={269}
              height={40}
              className="max-w-[269px] w-full h-auto mx-auto mt-[35px]"
            />

            <p className="text-[50px] leading-[70px] font-bold text-[#FFF] mt-[15px]">
              함께해서 가능한 결과
            </p>

            <div className="flex mt-[60px] justify-center gap-[48px]">
              <div className="relative rounded-[16px] text-center max-w-[268px] max-h-[268px] w-full h-full">
                <Image
                  src={"https://cdn.presscon.ai/newlanding/Bg_box1.webp"}
                  alt="Bg_box1"
                  width={268}
                  height={268}
                  className="max-w-[268px] max-h-[268px] w-full h-full"
                />

                <div className="absolute top-0 left-0 w-full h-full py-[56px] px-[52px]">
                  <Image
                    src={"https://cdn.presscon.ai/newlanding/icon_network.webp"}
                    alt="icon_network"
                    width={48}
                    height={48}
                    className="w-[48px] h-[48px] mx-auto"
                  />

                  <p className="text-[20px] leading-[28px] font-medium text-[#CDCDCD] mt-[24px]">
                    트래픽
                  </p>

                  <p className="text-[32px] leading-[44px] font-extrabold text-[#FFF] mt-[8px]">
                    40% 증가
                  </p>
                </div>
              </div>

              <div className="relative rounded-[16px] text-center max-w-[268px] max-h-[268px] w-full h-full">
                <Image
                  src={"https://cdn.presscon.ai/newlanding/Bg_box2.webp"}
                  alt="Bg_box2"
                  width={268}
                  height={268}
                  className="max-w-[268px] max-h-[268px] w-full h-full"
                />

                <div className="absolute top-0 left-0 w-full h-full py-[56px] px-[52px]">
                  <Image
                    src={"https://cdn.presscon.ai/newlanding/icon_click.webp"}
                    alt="icon_click"
                    width={48}
                    height={48}
                    className="w-[48px] h-[48px] mx-auto"
                  />

                  <p className="text-[20px] leading-[28px] font-medium text-[#CDCDCD] mt-[24px]">
                    클릭률
                  </p>

                  <p className="text-[32px] leading-[44px] font-extrabold text-[#FFF] mt-[8px]">
                    30% 상승
                  </p>
                </div>
              </div>

              <div className="relative rounded-[16px] text-center max-w-[268px] max-h-[268px] w-full h-full">
                <Image
                  src={"https://cdn.presscon.ai/newlanding/Bg_box3.webp"}
                  alt="Bg_box3"
                  width={268}
                  height={268}
                  className="max-w-[268px] max-h-[268px] w-full h-full"
                />

                <div className="absolute top-0 left-0 w-full h-full py-[56px] px-[52px]">
                  <Image
                    src={"https://cdn.presscon.ai/newlanding/icon_network.webp"}
                    alt="icon_network"
                    width={48}
                    height={48}
                    className="w-[48px] h-[48px] mx-auto"
                  />

                  <p className="text-[20px] leading-[28px] font-medium text-[#CDCDCD] mt-[24px]">
                    광고수익
                  </p>

                  <p className="text-[32px] leading-[44px] font-extrabold text-[#FFF] mt-[8px]">
                    300% 증대
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[120px]">
          <div className="max-w-[1440px] w-full mx-auto text-center">
            <p className="text-[24px] leading-[32px] font-bold text-[#8B99B1]">
              How to
            </p>

            <Image
              src={"https://cdn.presscon.ai/newlanding/textLogo.svg"}
              alt="textLogo"
              width={269}
              height={40}
              className="max-w-[269px] w-full h-auto mx-auto mt-[27px]"
            />

            <p className="text-[50px] leading-[70px] font-bold text-[#000] mt-[15px]">
              기사 작성의 모든 과정을 간편하게!
            </p>

            <div className="flex mt-[60px] justify-center gap-[24px]">
              <div className="text-center">
                <Image
                  src={"https://cdn.presscon.ai/newlanding/Howto_1.webp"}
                  alt="textLogo"
                  width={464}
                  height={368}
                  className="max-w-[464px] w-full max-h-[368px] h-full rounded-[24px]"
                />
                <p className="text-[22px] leading-[34px] font-bold text-[#000] mt-[24px]">
                  한눈에 미리보는 기사
                </p>
                <p className="text-[18px] leading-[28px] text-[#666] mt-[10px]">
                  직관적이고 편리한 UI로
                  <br />
                  기사작성의 번거로움을 줄여보세요!
                </p>
              </div>

              <div className="text-center">
                <Image
                  src={"https://cdn.presscon.ai/newlanding/Howto_2.webp"}
                  alt="textLogo"
                  width={464}
                  height={368}
                  className="max-w-[464px] w-full max-h-[368px] h-full rounded-[24px]"
                />
                <p className="text-[22px] leading-[34px] font-bold text-[#000] mt-[24px]">
                  언제 어디서든 가능한 기사작성
                </p>
                <p className="text-[18px] leading-[28px] text-[#666] mt-[10px]">
                  모바일 미리보기를 통해
                  <br />
                  실시간으로 확인하고 수정하세요!
                </p>
              </div>

              <div className="text-center">
                <Image
                  src={"https://cdn.presscon.ai/newlanding/Howto_3.webp"}
                  alt="textLogo"
                  width={464}
                  height={368}
                  className="max-w-[464px] w-full max-h-[368px] h-full rounded-[24px]"
                />
                <p className="text-[22px] leading-[34px] font-bold text-[#000] mt-[24px]">
                  실수가 없는 완벽한 파트너
                </p>
                <p className="text-[18px] leading-[28px] text-[#666] mt-[10px]">
                  맞춤법 기능을 통해
                  <br />
                  기사의 전문성을 높여보세요!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F1F6FF] py-[120px]">
          <div className="max-w-[1440px] w-full mx-auto flex justify-between">
            <div>
              <p className="text-[24px] leading-[32px] font-bold text-[#8B99B1]">
                Business
              </p>

              <Image
                src={"https://cdn.presscon.ai/newlanding/textLogo.svg"}
                alt="textLogo"
                width={269}
                height={40}
                className="max-w-[269px] w-full h-auto mt-[27px]"
              />

              <div className="flex items-center gap-[20px] mt-[15px]">
                <p className="text-[50px] leading-[70px] font-bold text-[#000]">
                  기사작성을
                  <br />더 쉽고 효율적으로
                </p>
              </div>
            </div>

            <Image
              src={"https://cdn.presscon.ai/newlanding/Business.webp"}
              alt="Business"
              width={862}
              height={812}
              className="max-w-[862px] w-full max-h-[812px] h-full mt-[62px]"
            />
          </div>
        </div>

        <div className="py-[120px]">
          <div className="max-w-[1440px] w-full mx-auto">
            <p className="text-[24px] leading-[32px] font-bold text-[#8B99B1]">
              Practical Use
            </p>

            <div className="flex items-center gap-[20px] mt-[12px]">
              <Image
                src={"https://cdn.presscon.ai/newlanding/textLogo.svg"}
                alt="textLogo"
                width={269}
                height={40}
                className="max-w-[269px] w-full h-auto"
              />
              <p className="text-[50px] leading-[70px] font-bold text-[#000]">
                지금 이순간에도
              </p>
            </div>
            <p className="text-[50px] leading-[70px] font-bold text-[#000]">
              다양한 분야에서 활용되고 있습니다.
            </p>

            <div className="flex mt-[60px] justify-center gap-[24px]">
              <div className="relative">
                <Image
                  src={
                    "https://cdn.presscon.ai/newlanding/PracticalUse_01.webp"
                  }
                  alt="PracticalUse_01"
                  width={342}
                  height={400}
                  className="max-w-[342px] max-h-[400px] w-full h-full"
                />

                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-[40px]">
                  <p className="text-[14px] text-[#FFF] leading-[24px] font-medium">
                    인터넷 언론사
                  </p>
                  <p className="text-[24px] text-[#FFF] leading-[34px] font-bold mt-[8px]">
                    자체 SEO기술로
                    <br />
                    홈페이지 검색엔진 최적화
                  </p>
                </div>
              </div>

              <div className="relative">
                <Image
                  src={
                    "https://cdn.presscon.ai/newlanding/PracticalUse_02.webp"
                  }
                  alt="PracticalUse_02"
                  width={342}
                  height={400}
                  className="max-w-[342px] max-h-[400px] w-full h-full"
                />

                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-[40px]">
                  <p className="text-[14px] text-[#FFF] leading-[24px] font-medium">
                    언론사
                  </p>
                  <p className="text-[24px] text-[#FFF] leading-[34px] font-bold mt-[8px]">
                    디지털 환경에 맞는
                    <br />
                    효율적인 기사작성 가이드
                  </p>
                </div>
              </div>

              <div className="relative">
                <Image
                  src={
                    "https://cdn.presscon.ai/newlanding/PracticalUse_03.webp"
                  }
                  alt="PracticalUse_03"
                  width={342}
                  height={400}
                  className="max-w-[342px] max-h-[400px] w-full h-full"
                />

                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-[40px]">
                  <p className="text-[14px] text-[#FFF] leading-[24px] font-medium">
                    마케팅 기자
                  </p>
                  <p className="text-[24px] text-[#FFF] leading-[34px] font-bold mt-[8px]">
                    빠르고 쉽게 얻을 수 있는
                    <br />
                    홍보 기사 아이디어
                  </p>
                </div>
              </div>

              <div className="relative">
                <Image
                  src={
                    "https://cdn.presscon.ai/newlanding/PracticalUse_04.webp"
                  }
                  alt="PracticalUse_04"
                  width={342}
                  height={400}
                  className="max-w-[342px] max-h-[400px] w-full h-full"
                />

                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-[40px]">
                  <p className="text-[14px] text-[#FFF] leading-[24px] font-medium">
                    기업
                  </p>
                  <p className="text-[24px] text-[#FFF] leading-[34px] font-bold mt-[8px]">
                    회사의 목적성에 맞게
                    <br />
                    편리하게 작성하는 기사
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="max-w-[1760px] w-full mx-auto rounded-[24px] py-[80px] text-center"
          style={{
            backgroundImage: `url(https://cdn.presscon.ai/newlanding/sub_con.webp)`,
            backgroundSize: "cover",
            // background:
            //   "linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(<path-to-image>) lightgray 1777.007px 673.82px / -275.448% -558.484% no-repeat",
          }}
        >
          <Image
            src={"https://cdn.presscon.ai/newlanding/textLogo_white.svg"}
            alt="textLogo_white"
            width={269}
            height={40}
            className="max-w-[269px] w-full h-[40px] mx-auto mt-[15px]"
          />

          <p className="text-[50px] leading-[70px] font-bold text-[#FFF] mt-[15px]">
            지금 바로 체험 해 보세요!
          </p>
          <p className="text-[20px] leading-[32px] text-[#BCBFDA] mt-[24px]">
            기사작성의 시작부터 성공까지 이어주는 Presscon Ai
          </p>

          <Link
            href={"https://services.presscon.ai/auth/login"}
            target="_blank"
            className="bg-[#1C6BFF] rounded-[10px] max-w-[200px] mx-auto h-[64px] w-full flex items-center justify-center mt-[56px] cursor-pointer"
          >
            <p className="text-[20px] leading-[32px] font-bold text-[#FFF]">
              바로 시작하기
            </p>
          </Link>
        </div>

        <div className="mt-[80px] sticky z-10 bottom-0 p-[20px] flex items-center justify-center gap-[12px]">
          <Link
            href={`http://pf.kakao.com/${process.env.NEXT_PUBLIC_KAKAO_CHANEL_ID}/chat`}
            target="_blank"
            className="bg-[#FAE524] rounded-[12px] h-[64px] max-w-[320px] w-full flex items-center justify-center gap-[8px]"
          >
            <Image
              src={"https://cdn.presscon.ai/newlanding/kakao.svg"}
              alt="kakao"
              width={24}
              height={24}
              className="w-[24px] h-[24px]"
            />
            <p className="text-[18px] leading-[30px] font-semibold text-[#222]">
              카카오톡 상담하기
            </p>
          </Link>

          <PhoneBtn />

          <div
            id="inquiry"
            className="bg-[#1C6BFF] border border-[#1155D4] rounded-[12px] h-[64px] max-w-[320px] w-full flex items-center justify-center gap-[8px] cursor-pointer"
          >
            <Image
              src={"https://cdn.presscon.ai/newlanding/mail.svg"}
              alt="mail"
              width={24}
              height={24}
              className="w-[24px] h-[24px]"
            />
            <p className="text-[18px] leading-[30px] font-semibold text-[#FFF]">
              문의하기
            </p>
          </div>
        </div>
      </div>
      <FormInquiry />
    </div>
  );
}
