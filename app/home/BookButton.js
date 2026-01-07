"use client";

import { useRouter } from "next/navigation";

export default function BookButton() {
    const router = useRouter();
  const handleClick = () => {
    router.push("/booking");
  };

  return (
    <div className="flex items-center justify-center pb-20"> 
       <button
      onClick={handleClick}
      className="bg-[#EBC2B5] text-[#1a1a1a] hover:bg-[#e0b0a0] px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold tracking-widest transition-colors"
    >
      Book Your Session
    </button>
    </div>
 
  );
}
