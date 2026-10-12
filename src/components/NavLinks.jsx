import Link from "next/link";
import React from "react";
import CategoryLinks from "./CategoryLinks";

const NavLinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );
  const data = await res.json();
  const productCategories = data;
  return (
    <div>
      <div className="flex gap-5 overflow-x-scroll md:overflow-hidden">
        {/* Adding All Categories */}
        {productCategories.map((productCategory) => (
          <CategoryLinks
            key={productCategory.id}
            productCategory={productCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
