"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const CaregoryPage = () => {
  const { categoryId } = useParams();
  const [sort, setSort] = useState("default");
  const [category, setCategory] = useState(null);

  const toBangla = (value) =>
    String(value).replace(/[0-9]/g, (digit) => "০১২৩৪৫৬৭৮৯"[digit]);

  const units = {
    kg: "কেজি",
    g: "গ্রাম",
    litre: "লিটার",
    piece: "পিস",
    dozen: "ডজন",
  };

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,
      );
      const data = await res.json();
      setCategory(data);
    };

    fetchCategory();
  }, [categoryId]);

  if (!category) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-[36px] font-bold text-[#1D271F]">
          লোড হচ্ছে...
        </h1>
        <p className="text-[#5f6761] my-4">
          পণ্যের তথ্য লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন।
        </p>
      </div>
    );
  }

  // For Sorting
  const sortedCategory = [...category];

  if (sort === "lowToHigh") {
    sortedCategory.sort((a, b) => a.today - b.today);
  } else if (sort === "highToLow") {
    sortedCategory.sort((a, b) => b.today - a.today);
  }

  // For Missing Category
  if (category.length === 0) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-[36px] font-bold text-[#1D271F]">
          ৪০৪ - ক্যাটাগরি পাওয়া যায়নি
        </h1>
        <p className="text-[#5f6761] my-4">
          এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-[#05893e] px-5 py-2.5 text-white font-semibold"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      {/* Top Area */}
      <div className="flex gap-3 items-center p-5 rounded-2xl border border-[#FAFCFA] bg-white">
        <p className="text-[30px]">{category[0]?.categoryIcon}</p>
        <div className="flex flex-col gap-0">
          <h2 className="text-[#1D271F] text-[24px] font-bold">
            {category[0]?.categoryNameBn}
          </h2>
          <span className="text-[#5f6761] text-[14px] font-normal">
            {category.length.toLocaleString("bn-BD")} টি পণ্যের আজকের দাম ও
            পরিবর্তন
          </span>
        </div>
      </div>

      {/* Product Showcase Area */}
      <div className="mt-4">
        <div className="flex justify-between items-center mb-3">
          <p className="text-[#5f6761] text-[14px] font-normal">
            {category.length.toLocaleString("bn-BD")} টি পণ্যের আজকের দাম ও
            পরিবর্তন
          </p>
          <div className="flex gap-3 items-center">
            <p className="text-[#5f6761] text-[14px] font-normal">
              সাজান
            </p>
            <select
              className="select rounded-lg"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">ডিফল্ট</option>
              <option value="lowToHigh">দাম: কম থেকে বেশি</option>
              <option value="highToLow">দাম: বেশি থেকে কম</option>
            </select>
          </div>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sortedCategory.map((product) => (
            <Link href={`/product/${product.slug}`} key={product.id}>
              <div className="border border-[#E1E8E1] hover:border-[#05893e] rounded-2xl p-4 bg-white">
                <div className="flex items-center gap-3">
                  <div className="bg-[#F0F5F0] rounded-xl px-3 py-2">
                    <span>{product.image}</span>
                  </div>
                  <div>
                    <h3 className="text-[#1D271F] text-[16px] font-semibold">
                      {product.nameBn}
                    </h3>
                    <p className="text-[#1D271F] font-normal">
                      প্রতি {units[product.unit?.toLowerCase()] || product.unit}
                    </p>
                  </div>
                </div>
                <div className="flex items-end justify-between mt-3">
                  <div>
                    <p className="text-[#1D271F] font-normal">আজকের দাম</p>
                    <p className="text-[14px] font-medium text-[#1D271F]">
                      <span className="font-bold text-[20px]">
                        {toBangla(product.today)}
                      </span>{" "}
                      টাকা
                    </p>
                  </div>
                  <div>
                    <p
                      className={`flex items-center py-1 px-2 rounded-2xl bg-[#F0F5F0] ${
                        product.change.dir === "up"
                          ? "text-[#D03739]"
                          : product.change.dir === "flat"
                            ? "text-[#1c261e]"
                            : "text-[#1A9951]"
                      }`}
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaregoryPage;