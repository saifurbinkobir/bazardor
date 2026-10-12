import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white border-t border-[#E1E8E1]'>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4'>
                <p className='text-[#1D271F] text-[14px] font-normal'>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
                <p>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
            </div>
        </div>
    );
};

export default Footer;