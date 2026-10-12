"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      router.push("/");
    }
    if (error) {
      console.log(error);
    }
    console.log("User Data", data);
  };

  return (
    <div className="my-10 flex flex-col items-center">
      <h2 className="text-[#1D271F] font-bold text-[24px]">
        অ্যাকাউন্ট তৈরি করুন
      </h2>
      <p className="text-[#5c655e] font-normal text-[14px]">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>

      {/* Form Area */}
      <div className="p-6 rounded-2xl border border-[#E1E8E1] bg-white my-4">
        <form className="flex flex-col gap-4" onSubmit={handleSignIn}>
          <div>
            <label htmlFor="name">নাম</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="যেমন: রহিম উদ্দিন"
              required
              className="w-full border border-[#E1E8E1] rounded-lg py-2.5 px-3"
            />
          </div>

          <div>
            <label htmlFor="email">ইমেইল</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full border border-[#E1E8E1] rounded-lg py-2.5 px-3"
            />
          </div>

          <div>
            <label htmlFor="password">পাসওয়ার্ড</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              minLength="8"
              required
              className="w-full border border-[#E1E8E1] rounded-lg py-2.5 px-3"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">পাসওয়ার্ড নিশ্চিত করুন</label>
            <br />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="আবার লিখুন"
              required
              className="w-full border border-[#E1E8E1] rounded-lg py-2.5 px-3"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-[#047F39] px-4.5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_3px_-2px_rgba(5,137,62,0.3)] cursor-pointer"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </form>

        <div className="flex items-center justify-center gap-4 my-4">
          <hr className="flex-1 border-[#e4e7e4]" />
          <span className="text-sm text-[#1D271F]">অথবা</span>
          <hr className="flex-1 border-[#e4e7e4]" />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex items-center gap-2 border border-[#E1E8E1] rounded-lg py-2.5 px-3 text-[14px] font-semibold text-[#1D271F] hover:bg-[#dadeda] hover:shadow-sm"
          >
            <span><FcGoogle /></span>
            <span>Google দিয়ে চালিয়ে যান</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-2 border border-[#E1E8E1] rounded-lg py-2.5 px-3 text-[14px] font-semibold text-[#1D271F] hover:bg-[#dadeda] hover:shadow-sm"
          >
            <span><FaGithub /></span>
            <span>GitHub দিয়ে চালিয়ে যান</span>
          </button>
        </div>

        <p className="text-[#1D271F] text-[14px] font-normal text-center mt-4">
          অ্যাকাউন্ট আছে?
          <Link href="/signin" className="text-[#05893E]">
            সাইন ইন করুন
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;