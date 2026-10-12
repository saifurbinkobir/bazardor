import Link from "next/link";
import React from "react";
import Marquee from "./Marquee";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div className="bg-white">
      {/* Header Top */}
      <div className="py-3 px-3 md:px-0">
        <div className="container mx-auto flex justify-between">
          <Link href={"/"}>
            <div className="flex gap-2">
              <p className="bg-[#05893E] py-2.5 px-2.75 rounded-xl">🛒</p>
              <h2 className="font-bold text-[20px] text-[#1D271F] flex flex-col">
                বাজার দর <br />
                <span className="font-light text-[12px]">{date}</span>
              </h2>
            </div>
          </Link>
          <div className="flex items-center gap-5">
            <Link className="text-[14px] font-semibold text-[#1D271F]" href={'signin'}>
              সাইন ইন
            </Link>
            <Link className="rounded-lg bg-[#047F39] px-4.5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_3px_-2px_rgba(5,137,62,0.3)]" href={'signup'}>
              সাইন আপ
            </Link>
          </div>
        </div>
      </div>
      
      {/* Categories Menu */}
      <div className="py-2 border-y border-[#F0F5F0]">
        <div className="container mx-auto">
            <NavLinks></NavLinks>
        </div>
      </div>
      {/* Category Marquee Area */}
      <div>
        <Marquee></Marquee>
      </div>
    </div>
  );
};

export default Header;
