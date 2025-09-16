import "./globals.css";
import MainLayout from "@/components/layout/mainLayout";
import { Almarai, Poppins } from "next/font/google";
import localFont from "next/font/local";
import ReactToastifyProvider from "@/provider/ReactToastifyProvider";

export const metadata = {
  title: "Falta Arena - ساحة فلته",
  description:
    "Where Challenges Begin and Champions Rise - هنا يبدأ التحدي.. وهنا يصنع الأبطال",
};

const almarai = Almarai({
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-almarai",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  style: "normal",
  variable: "--font-poppins",
});

const zain = localFont({
  src: [
    {
      path: "../public/fonts/Zain-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Zain-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Zain-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Zain-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-zain",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${zain.variable} ${almarai.variable} ${poppins.variable} font-zain`}
      >
        <MainLayout>{children}</MainLayout>
        <ReactToastifyProvider />
      </body>
    </html>
  );
}
