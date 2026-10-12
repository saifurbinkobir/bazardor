import React from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const CaregoryPage = async ({ params }) => {
  const { categoryId } = await params;
  const toBangla = (value) =>
    String(value).replace(/[0-9]/g, (digit) => "০১২৩৪৫৬৭৮৯"[digit]);

  const units = {
    kg: "কেজি",
    g: "গ্রাম",
    litre: "লিটার",
    piece: "পিস",
    dozen: "ডজন",
  };
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,
  );
  const data = await res.json();
  const category = data;
  return (
    <div className="container mx-auto">
      {/* Top Area */}
      <div className="flex gap-3 items-center p-5 rounded-2xl border border-[#FAFCFA] bg-white">
        <p className="text-[30px]">{category[0]?.categoryIcon}</p>
        <div className="flex flex-col gap-0">
            <h2 className="text-[#1D271F] text-[24px] font-bold">{category[0]?.categoryNameBn}
        </h2>
        <span className="text-[#5f6761] text-[14px] font-normal">{category.length.toLocaleString("bn-BD")} টি পণ্যের আজকের দাম ও পরিবর্তন</span>
        </div>
      </div>

      {/* Product Showcase Area */}
      <div className="mt-4">
        <p className="text-[#5f6761] text-[14px] font-normal">{category.length.toLocaleString("bn-BD")} টি পণ্যের আজকের দাম ও পরিবর্তন</p>
        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {category.map((product) => (
                <div
                  key={product.id}
                  className="border border-[#E1E8E1] rounded-2xl p-4 bg-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-[#F0F5F0] rounded-xl px-3 py-2">
                      <span>{product.image}</span>
                    </div>
                    <div>
                      <h3 className="text-[#1D271F] text-[16px] font-semibold">{product.nameBn}</h3>
                      <p className="text-[#1D271F] font-normal">প্রতি {units[product.unit?.toLowerCase()] || product.unit}</p>
                    </div>
                  </div>
                  <div className="flex items-end justify-between mt-3">
                    <div>
                        <p className="text-[#1D271F] font-normal">আজকের দাম</p>
                        <p className="text-[14px] font-medium text-[#1D271F]"><span className="font-bold text-[20px]">{toBangla(product.today)}</span> টাকা</p>
                    </div>
                    <div>
                        <p className={`flex items-center py-1 px-2 rounded-2xl bg-[#F0F5F0]  ${product.change.dir === "up" ? "text-[#D03739]" : "text-[#1A9951]"}`}>
                                      {product.change.dir === "up" ? <FaCaretUp /> : <FaCaretDown />} {toBangla(Math.abs(product.change.pct))}%
                                    </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
      </div>
    </div>
  );
};

export default CaregoryPage;
