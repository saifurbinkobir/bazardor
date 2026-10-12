import Link from "next/link";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const SingleProductPage = async ({ params }) => {
  const { productId } = await params;
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data = await res.json();
  const product = data.find((item) => item.slug === productId);
  const toBangla = (value) =>
    String(value).replace(/[0-9]/g, (digit) => "০১২৩৪৫৬৭৮৯"[digit]);

  const units = {
    kg: "কেজি",
    g: "গ্রাম",
    litre: "লিটার",
    piece: "পিস",
    dozen: "ডজন",
  };

  //   Calculating Average
  let total = 0;

  product.markets.forEach((market) => {
    total += (market.min + market.max) / 2;
  });
  const average = Math.round(total / product.markets.length);
  return (
    <div className="container mx-auto">
      {/* Breadcrumb */}
      <div>
        <p className="flex gap-2 items-center">
          <Link href={"/"}>হোম</Link>{" "}
          <span>
            <BsChevronRight />
          </span>{" "}
          <Link href={`/category/${product.category}`}>
            {product.categoryNameBn}
          </Link>{" "}
          <span>
            <BsChevronRight />
          </span>{" "}
          {product.nameBn}
        </p>
      </div>
      {/* Product Summary */}
      <div className="flex flex-col md:flex-row gap-5 items-start md:items-center justify-between bg-white p-5 rounded-2xl border border-[#E1E8E1] my-5">
        <div className="flex items-center gap-4">
          <div className="bg-[#f0f5f0] rounded-2xl p-5">
            <span className="text-[30px]">{product.image}</span>
          </div>
          <div>
            <h2>{product.nameBn}</h2>
            <p className="text-[#5f6761]">
              প্রতি {units[product.unit?.toLowerCase()] || product.unit} ·{" "}
              {product.categoryNameBn}
            </p>
            <p>
              গতকালের তুলনায় আজ দাম{" "}
              <span className="font-bold">
                {product.change.dir === "up"
                  ? "বেড়েছে"
                  : product.change.dir === "flat"
                    ? "অপরিবর্তিত"
                    : "কমেছে"}
              </span>{" "}
              <span>
                {product.change.dir === "flat"
                  ? " "
                  : `· ${Math.abs(product.today - product.yesterday).toLocaleString("bn-BD")} টাকা`}
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="text-center w-full md:w-auto py-4 px-5 rounded-2xl bg-[#F0F5F0]">
          <p className="text-[#5c655e]">আজকের দাম</p>
          <h3 className="text-[#1D271F] text-[30px] font-bold">
            {product.today.toLocaleString("bn-BD")}
          </h3>
          <p>টাকা / {units[product.unit?.toLowerCase()] || product.unit}</p>
          <p
            className={`flex items-center justify-center rounded-2xl bg-[#F0F5F0]  ${product.change.dir === "up" ? "text-[#D03739]" : product.change.dir === "flat" ? "text-[#5f6761]" : "text-[#1A9951]"}`}
          >
            {product.change.dir === "up" ? (
              <FaCaretUp />
            ) : product.change.dir === "flat" ? (
              "—"
            ) : (
              <FaCaretDown />
            )}{" "}
            {toBangla(Math.abs(product.change.pct))}%
          </p>
        </div>
      </div>

      {/* Main Product Area */}
      <div className="p-5 rounded-2xl bg-white border border-[#E1E8E1]">
        <h2 className="text-[#1D271F] font-semibold text-[18px]">
          দামের সারসংক্ষেপ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          <div className="py-4 px-6 rounded-2xl border border-[#E1E8E1]">
            <p className="text-[#1D271F] font-normal">সর্বনিম্ন দাম</p>
            <p className="text-[#1A9951] font-medium text-[14px]">
              <span className="font-bold text-[24px]">
                {toBangla(
                  Math.min(...product.markets.map((market) => market.min)),
                )}
              </span>{" "}
              টাকা
            </p>
            <p className="text-[#1D271F] font-normal">সবচেয়ে কম দামের বাজার</p>
          </div>

          <div className="py-4 px-6 rounded-2xl border border-[#E1E8E1]">
            <p className="text-[#1D271F] font-normal">সর্বাধিক দাম</p>
            <p className="text-[#D03739] font-medium text-[14px]">
              <span className="font-bold text-[24px]">
                {toBangla(
                  Math.max(...product.markets.map((market) => market.min)),
                )}
              </span>{" "}
              টাকা
            </p>
            <p className="text-[#1D271F] font-normal">
              সবচেয়ে বেশি দামের বাজার
            </p>
          </div>

          <div className="py-4 px-6 rounded-2xl border border-[#E1E8E1]">
            <p className="text-[#1D271F] font-normal">গড় দাম</p>
            <p className="text-[#1A9951] font-medium text-[14px]">
              <span className="font-bold text-[24px]">{toBangla(average)}</span>{" "}
              টাকা
            </p>
            <p className="text-[#1D271F] font-normal">প্রতি কেজি-এর হিসাবে</p>
          </div>
        </div>

        {/* Table Area */}
        <h2 className="text-[#1D271F] font-semibold text-[18px] mt-6 mb-3">
          বাজারভিত্তিক আজকের দাম
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[#E1E8E1]">
          <table className="w-full text-[14px]">
            <thead className="bg-[#F8FAF8]">
              <tr className="text-[#5f6761]">
                <th className="px-4 py-3 text-left font-medium">বাজার</th>
                <th className="px-4 py-3 text-left font-medium">বিভাগ</th>
                <th className="px-4 py-3 text-right font-medium">সর্বনিম্ন</th>
                <th className="px-4 py-3 text-right font-medium">সর্বাধিক</th>
                <th className="px-4 py-3 text-right font-medium">গড়</th>
              </tr>
            </thead>

            <tbody>
              {product.markets.map((market, index) => (
                <tr
                  key={index}
                  className="border-t border-[#E1E8E1] even:bg-[#F0F5F0]"
                >
                  <td className="px-4 py-3 text-left text-[#1D271F]">
                    {market.market}
                  </td>
                  <td className="px-4 py-3 text-left text-[#1D271F]">
                    {market.division}
                  </td>
                  <td className="px-4 py-3 text-right text-[#1D271F]">
                    {toBangla(market.min)} টাকা
                  </td>
                  <td className="px-4 py-3 text-right text-[#1D271F]">
                    {toBangla(market.max)} টাকা
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-[#1D271F]">
                    {toBangla((market.min + market.max) / 2)} টাকা
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-5 flex">
        <Link className='flex items-center gap-1.5 py-1.75 px-3.75 text-[#1D271F] hover:bg-[#dadeda] hover:shadow-sm rounded-lg' key={product.id} href={`/category/${product.category}`}><span>{product.categoryIcon}</span>  সব <span>{product.categoryNameBn}</span></Link>
      </div>
    </div>
  );
};

export default SingleProductPage;
