import Link from 'next/link';
import React from 'react';

const NavLinks = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");
    const data = await res.json();
    const productCategories = data;
    return (
        <div>
            <div className='flex gap-5 overflow-x-scroll md:overflow-hidden'>
            {/* Adding All Categories */}
            {productCategories.map((productCategory) => <Link className='flex items-center gap-1.5 py-1.75 px-3.75 text-[#1D271F] hover:bg-[#dadeda] hover:shadow-sm rounded-lg' key={productCategory.id} href={`/category/${productCategory.slug}`}><span>{productCategory.icon}</span> <span>{productCategory.nameBn}</span></Link>)}
        </div>
        </div>
    );
};

export default NavLinks;