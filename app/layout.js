import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

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
      <body>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
