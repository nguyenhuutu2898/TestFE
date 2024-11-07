import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  };
}

export const metadata = {
  title: "PRESSCON Ai",
  description:
    "언론사를 위한 맞춤형 AI CMS 솔루션, 프레스콘 Ai 방문을 환영합니다.",
  openGraph: {
    title: "PRESSCON Ai",
    description:
      "언론사를 위한 맞춤형 AI CMS 솔루션, 프레스콘 Ai 방문을 환영합니다.",
    url: "https://presscon.ai",
    siteName: "Presscon Ai",
    images: ["https://cdn.presscon.ai/images/KakaoTalkOG.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRESSCON Ai",
    description:
      "언론사를 위한 맞춤형 AI CMS 솔루션, 프레스콘 Ai 방문을 환영합니다.",
    images: [
      {
        url: "https://cdn.presscon.ai/images/TwitterOG.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  verification: {
    google: "amI-OnybgFDy5z-G9hW-1CnHetCF8d03EZ75dTAZSGw",
    other: {
      "naver-site-verification": ["692179990632a9fa3b53e228cd6ace8c632181b9"],
    },
  },
  alternates: {
    canonical: "https://presscon.ai/",
  },
  icons: {
    icon: "https://cdn.presscon.ai/images/favicon-landing.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://cdn.news.newshub.kr/sdk/site_tracking.js"
        ></script>
        {/* <script type="text/javascript" src="//wcs.naver.net/wcslog.js" /> */}
        {/* <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              if (!wcs_add) var wcs_add={};
              wcs_add["wa"] = "s_151359b91e87";
              if (!_nasa) var _nasa={};
              if(window.wcs){
                wcs.inflow();
                wcs_do();
              }
            `,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "ojtqiqvd6x");
            `,
          }}
        /> */}
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
