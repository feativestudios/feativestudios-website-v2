"use client"; 

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "./Header";
import Footer from "./Footer"; 
import CookieConsentModal from "./CookiesConsetntModal"; 

const Toaster = dynamic(
  () => import("react-hot-toast").then((mod) => mod.Toaster),
  { ssr: false }
);

export default function ClientLayoutWrapper({ children }) {

  return (
    <>
      <Header />
      {children}
      <Footer />
      <Toaster position="top-right" />
      <CookieConsentModal />
    </>
  );
}