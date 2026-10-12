"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const [showProfile, setShowProfile] = useState(false);
  return (
    <div>
      {user ? (
        <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <button className="text-black flex gap-3 items-center text-[14px] hover:bg-[#dadeda] hover:shadow-sm rounded-lg py-2 px-3 cursor-pointer" onClick={() => setShowProfile(!showProfile)}>
            <span className=" text-white bg-[#047F39] px-3 py-1 rounded-lg">
              {user?.name[0]}
            </span>
            <span>{user?.name}</span>
          </button>
          
        </div>
        {/* Profile Card */}
        {showProfile && (
          <div className="border border-[#E1E8E1] hover:border-[#D03739] bg-[#FAFCFA] py-4 px-5 rounded-lg absolute top-18 z-10">
            <h2 className="text-[#1D271F] font-semibold text-[14px]">
              {user?.name}
            </h2>
            <p className="text-[#5f6761] font-semibold text-[12px]">
              {user?.email}
            </p>
            <Link href={'/profile'} className="rounded-lg px-1.5 py-2.5 text-sm font-semibold text-[#1D271F] cursor-pointer hover:bg-[#dadeda] hover:shadow-sm block w-full my-2">👤 আমার প্রোফাইল</Link>
            <button
              className="rounded-lg px-1.5 py-2.5 text-sm font-semibold text-[#D03739] cursor-pointer hover:bg-[#dadeda] hover:shadow-sm block w-full"
              onClick={handleSignOut}
            >       ↩ সাইন আউট  
            </button>
          </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-5">
          <Link
            className="text-[14px] font-semibold text-[#1D271F]"
            href={"signin"}
          >
            সাইন ইন
          </Link>
          <Link
            className="rounded-lg bg-[#047F39] px-4.5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_3px_-2px_rgba(5,137,62,0.3)]"
            href={"signup"}
          >
            সাইন আপ
          </Link>
        </div>
      )}
          
    </div>
  );
};

export default UserInfo;
