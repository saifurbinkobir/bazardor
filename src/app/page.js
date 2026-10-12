import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

export default async function Home() {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const products = await res.json();
  return (
    <div>
      {/* Hero Section */}
      <div className="container mx-auto border border-[#E1E8E1] rounded-3xl py-2.5 px-4 bg-white flex flex-col md:flex-row items-center justify-between">
        {/* Hero Text Area */}
        <div>
          <p className="py-1 px-3 rounded-[14px] bg-[#e1f1e7] inline text-[#05893E] font-medium text-[14px]">
            {date}
          </p>
          <h1 className="text-[#1D271F] text-[36px] font-bold my-2">
            আজকের বাজারের দাম এক নজরে
          </h1>
          <p className="text-[#5f6761] text-[16px] font-normal mt-3 mb-7">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <Link
            className="rounded-lg bg-[#047F39] px-4.5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_3px_-2px_rgba(5,137,62,0.3)]"
            href="#সব-পণ্য"
          >
            সব পণ্য দেখুন
          </Link>
        </div>

        {/* Hero Image Area */}
        <div>
          <Image
            src={"/bazar-hero.png"}
            alt="বাজারের দাম"
            height={360}
            width={288}
            loading="eager"
          ></Image>
        </div>
      </div>

      {/* Increasing Products Section */}
      <div className="container mx-auto my-5">
        <h2 className="flex items-center gap-2 text-[#1D271F] text-[20px] font-bold mb-3">
          <span className="text-[#D03739]">
            <FaCaretUp />
          </span>
          আজ দাম বেড়েছে
        </h2>
        <ProductCard dir="up" />
      </div>

      {/* Decreasing Products Section */}
      <div className="container mx-auto">
        <h2 className="flex items-center gap-2 text-[#1D271F] text-[20px] font-bold mb-3">
          <span className="text-[#1A9951]">
            <FaCaretDown />
          </span>
          আজ দাম কমেছে
        </h2>
        <ProductCard dir="down" />
      </div>

      {/* All Products Section */}
      <div className="container mx-auto my-5" id="সব-পণ্য">
        <h2 className="flex items-center gap-2 text-[#1D271F] text-[20px] font-bold">
          সব পণ্য
        </h2>
        <p className="text-[#5c655e] text-[14px] font-normal mb-4">
          মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </p>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
}
