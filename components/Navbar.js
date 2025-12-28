"use client";

import Image from "next/image";
import {
  Home,
  Image as ImageIcon,
  CalendarCheck,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
         
      <nav className="hidden md:block w-full border-b border-gray-200 bg-white h-16 fixed top-0 z-50">
              
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
          {/* Left */}
          <div className="fixed top-4 left-4 z-50 flex items-center gap-2 text-gray-700">
  <Image
    src="https://res.cloudinary.com/dq4l50k5a/image/upload/v1766688394/1__1_-removebg-preview_xtl3tc.png"
    alt="Sunny Filmzz Logo"
    width={24}
    height={24}
    priority
  />
  <span className="text-xl font-semibold tracking-widest">
    Sunny Filmzz
  </span>
</div>


    
 

          {/* Right Menu */}
       <div className="absolute top-4 right-6 flex items-center gap-6 text-sm text-gray-700">
  <Link href="/home">Home</Link>
  <Link href="/gallery">Gallery</Link>
  <Link href="/booking">Booking</Link>
  <Link href="/Pricing">Pricing</Link>
  <Link href="/crew">Crew</Link>
</div>

        </div>
      </nav>

      {/* ================= MOBILE TOP HEADER ================= */}
      <header className="fixed top-0 z-40 flex w-full items-center justify-center border-b bg-white py-3 md:hidden">
       <Image
    src="https://res.cloudinary.com/dq4l50k5a/image/upload/v1766688394/1__1_-removebg-preview_xtl3tc.png"
    alt="Sunny Filmzz Logo"
    width={24}
    height={24}
    priority
  />
  <span className="text-xl font-semibold tracking-widest">
    Sunny Filmzz
  </span>
      </header>

      {/* ================= MOBILE BOTTOM NAVBAR ================= */}
      <nav className="fixed bottom-4 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 rounded-2xl bg-black px-6 py-3 shadow-xl md:hidden">
        <div className="flex items-center justify-between text-gray-400">

          <NavItem href="/home" active={pathname === "/home"}>
  <Home />
</NavItem>

<NavItem href="/gallery" active={pathname === "/gallery"} glow>
  <ImageIcon />
</NavItem>

<NavItem href="/Pricing" active={pathname === "/Pricing"}>
  <CalendarCheck />
</NavItem>


<NavItem href="/crew" active={pathname === "/crew"}>
  <Users />
</NavItem>

        </div>
      </nav>
    </>
  );
}

/* ================= NAV ITEM ================= */
function NavItem({ href, children, active, glow }) {
  return (
    <Link
      href={href}
      className={`relative flex h-12 w-12 items-center justify-center rounded-xl transition-all
        ${active ? "text-white" : "text-gray-400 hover:text-white"}
      `}
    >
      {glow && active && (
        <>
          <span className="absolute -top-3 h-2 w-10 rounded-full bg-red-500"></span>
          <span className="absolute -top-8 h-10 w-10 rounded-full bg-red-500/30 blur-xl"></span>
        </>
      )}

      {children}
    </Link>
  );
}