"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Image as ImageIcon,
  CalendarCheck,
  Users,
} from "lucide-react";

/* ================= CONFIG ================= */

const LOGO_URL =
  "https://res.cloudinary.com/dq4l50k5a/image/upload/v1766688394/1__1_-removebg-preview_xtl3tc.png";

const DESKTOP_LINKS = [
  { href: "/home", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/booking", label: "Booking" },
  { href: "/Pricing", label: "Pricing" },
  { href: "/crew", label: "Crew" },
];

const MOBILE_LINKS = [
  { href: "/home", icon: Home },
  { href: "/gallery", icon: ImageIcon, glow: true },
  { href: "/Pricing", icon: CalendarCheck },
  { href: "/crew", icon: Users },
];

/* ================= NAVBAR ================= */

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="fixed top-0 z-50 hidden h-16 w-full border-b border-[#eadfdc] bg-[#FDF2F0] md:block">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />

          <div className="flex items-center gap-8 text-sm font-medium text-[#6B6B6B]">
            {DESKTOP_LINKS.map((link) => (
              <DesktopLink key={link.href} {...link} />
            ))}
          </div>
        </div>
      </nav>

      {/* ================= MOBILE TOP HEADER ================= */}
      <header className="fixed top-0 z-40 flex w-full items-center justify-center gap-2 border-b border-[#eadfdc] bg-[#FDF2F0] py-3 md:hidden">
        <Logo small />
      </header>

      {/* ================= MOBILE BOTTOM NAVBAR ================= */}
      <nav className="fixed bottom-4 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 rounded-2xl bg-[#EBC2B5] px-6 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.25)] md:hidden">
        <div className="flex items-center justify-between">
          {MOBILE_LINKS.map(({ href, icon: Icon, glow }) => (
            <NavItem
              key={href}
              href={href}
              active={pathname === href}
              glow={glow}
            >
              <Icon />
            </NavItem>
          ))}
        </div>
      </nav>
    </>
  );
}

/* ================= LOGO ================= */

function Logo({ small = false }) {
  return (
    <div className="flex items-center gap-2 text-[#1A1A1A]">
      <Image
        src={LOGO_URL}
        alt="Sunny Filmzz Logo"
        width={small ? 24 : 26}
        height={small ? 24 : 26}
        priority
      />
      <span
        className={`font-semibold ${
          small ? "tracking-[0.3em] text-lg" : "tracking-[0.25em] text-lg"
        }`}
      >
        Sunny Filmzz
      </span>
    </div>
  );
}

/* ================= DESKTOP LINK ================= */

function DesktopLink({ href, label }) {
  return (
    <Link
      href={href}
      className="relative transition-colors hover:text-[#1A1A1A]
        after:absolute after:-bottom-1 after:left-0 after:h-[1px]
        after:w-0 after:bg-[#EBC2B5] after:transition-all hover:after:w-full"
    >
      {label}
    </Link>
  );
}

/* ================= MOBILE NAV ITEM ================= */

function NavItem({ href, children, active, glow }) {
  return (
    <Link
      href={href}
      className={`relative flex h-12 w-12 items-center justify-center rounded-xl transition-all
        ${
          active
            ? "text-[#1A1A1A]"
            : "text-[#9C9C9C] hover:text-[#EBC2B5]"
        }`}
    >
      {glow && active && (
        <>
          <span className="absolute -top-2 h-1.5 w-8 rounded-full bg-gradient-to-r from-[#ee9ca7] to-[#ffdde1]" />
          <span className="absolute -top-6 h-8 w-8 rounded-full bg-[#EBC2B5]/30 blur-xl" />
        </>
      )}
      {children}
    </Link>
  );
}
