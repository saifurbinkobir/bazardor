"use client";
import { authClient } from "@/lib/auth-client";
const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUserData = Object.fromEntries(formData.entries());
    await authClient.updateUser({
      ...newUserData,
    });
    alert("Profile Updated");
  };
  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-[#1D271F] text-[24px] font-bold">আমার প্রোফাইল</h2>
      <p className="text-[#5c655e] font-normal text-[14px]">
        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
      </p>
      <div className=" p-6 rounded-lg border border-[#E1E8E1] bg-white my-6 flex justify-between items-center">
        <h2 className="text-black flex gap-3 items-center text-[14px]">
          <span className=" text-white bg-[#047F39] px-5 py-1 rounded-lg text-[30px]">
            {user?.name[0]}
          </span>
          <span
            className="text-[20px] font-semibold"
            style={{ lineHeight: "20px" }}
          >
            {user?.name}
            <br />
            <span className="text-[#5f6761] text-[16px] font-normal">
              {user?.email}
            </span>
          </span>
        </h2>
        <button
              className="rounded-lg px-1.5 py-2.5 text-sm font-semibold text-[#D03739] cursor-pointer border border-[#D03739] hover:bg-[#D03739] hover:text-white"
              onClick={handleSignOut}
            >        ↩ সাইন আউট
            </button>
      </div>
      <div className="p-6 rounded-lg border border-[#E1E8E1] bg-white">
        <h2 className="text-black flex gap-3 font-bold text-[18px]">তথ্য</h2>
        <form className="flex flex-col gap-4" onSubmit={handleUpdateProfile}>
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

          <button
            type="submit"
            className="rounded-lg bg-[#047F39] px-4.5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_3px_-2px_rgba(5,137,62,0.3)] cursor-pointer"
          >
            আপডেট 
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
