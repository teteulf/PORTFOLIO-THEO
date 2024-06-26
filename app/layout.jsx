import { Sora } from "next/font/google";
import "./globals.css";
import HeaderLayout from "./header";
import Menu from "./menu";
import TopLeftImg from "./components/topLeftImg";
import BottomRightImg from "./components/bottomRightImg";
import { TransitionProvider } from "./context/transitionContext";
import TransitionPages from "./components/transitionAnimation";

const inter = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Portfólio",
  description: "My personal portfólio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="bg-[#0c0c20] overflow-hidden">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} h-full w-full`}>
        <TransitionProvider>
          <HeaderLayout />
          <TopLeftImg />
          <BottomRightImg />
          <Menu />
          <TransitionPages />
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
