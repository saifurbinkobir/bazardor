import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div className="my-7.5">
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
          <Image src={'/bazar-hero.png'} alt="বাজারের দাম" height={360} width={288}></Image>
        </div>
      </div>
    </div>
  );
}
