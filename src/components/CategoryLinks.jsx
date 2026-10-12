"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryLinks = ({ productCategory }) => {
  const pathname = usePathname();
  return (
    <div>
      <Link
        href={`/category/${productCategory.slug}`}
        className={`flex items-center gap-1.5 py-1.75 px-3.75 rounded-lg ${
          pathname === `/category/${productCategory.slug}`
            ? "bg-[#05893e] text-white"
            : "text-[#1D271F] hover:bg-[#dadeda] hover:shadow-sm"
        }`}
      >
        <span>{productCategory.icon}</span>
        <span>{productCategory.nameBn}</span>
      </Link>
    </div>
  );
};

export default CategoryLinks;
