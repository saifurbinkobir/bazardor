import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container mx-auto text-center py-20">
      <h1 className="text-[36px] font-bold text-[#1D271F]">
        ৪০৪ - পেজ পাওয়া যায়নি
      </h1>
      <p className="text-[#5f6761] my-4">
        দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
      </p>
      <Link
        href="/"
        className="inline-block rounded-lg bg-[#05893e] px-5 py-2.5 text-white font-semibold"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default NotFound;