import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin", "bengali"],
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata = {
  title: "বাজার দর",
  description: "আজকের দাঁড়ির দাম",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${hindSiliguri.className} h-full antialiased`} data-theme="light"
    >
      <body className="min-h-full flex flex-col bg-[#f0f5f0]">
        <Header></Header>
        <main className="my-7.5 flex flex-col gap-10 px-3 md:px-0">
          {children}
        </main>
        <ToastContainer />
        <Footer></Footer>
        </body>
    </html>
  );
}
