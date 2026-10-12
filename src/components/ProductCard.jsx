import React from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const ProductCard = async ({ dir }) => {
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
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data = await res.json();
  const products = data;
  const filteredProducts = dir ? products.filter(product => product.change.dir === dir).slice(0,6) : products;
  return (
    <div className="grid grid-cols-3 gap-4">
      {filteredProducts.map((product) => (
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
  );
};

export default ProductCard;
