import React from 'react';

const SiteLoading = () => {
    return (
         <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      {/* Loading Animation */}
      <div className="relative w-20 h-20 flex items-center justify-center">
        <div className="absolute inset-0 border-4 border-[#E1E8E1] border-t-[#05893E] rounded-full animate-spin"></div>
        <span className="text-[30px]">🛒</span>
      </div>

      {/* Loading Text */}
      <h2 className="text-[#1D271F] text-[22px] font-bold">
        বাজার দর
      </h2>
      <p className="text-[#5f6761] text-[14px]">
        তথ্য লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...
      </p>
    </div>
    );
};

export default SiteLoading;