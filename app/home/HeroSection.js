"use client";
import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="relative w-full h-[50vh] md:h-[85vh] overflow-hidden">
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      <Image
        src="https://res.cloudinary.com/dq4l50k5a/image/upload/v1766599265/sw_f6gms8.jpg"
        alt="Wedding Couple"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
    </section>
  );
}
