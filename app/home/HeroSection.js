"use client";
import Image from "next/image";
export default function HeroSection() {
  return (
   <div className="w-full max-w-screen overflow-x-hidden">
  {/*  IMAGE 1 */}
  <section className="relative w-full h-[45vh] sm:h-[55vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
    <div className="absolute inset-0 bg-black/10 z-10 " />

    <Image
      src="https://res.cloudinary.com/dq4l50k5a/image/upload/v1766599265/sw_f6gms8.jpg"
      alt="Wedding Couple"
      fill
      priority
      className="object-cover object-center"
      sizes="100vw"
    />
  </section>

  {/* IMAGE 2  */}
 <section className="relative w-full h-[45vh] sm:h-[55vh] md:h-[75vh] lg:h-[85vh] overflow-hidden border-20 border-white">
    <div className="absolute inset-0 bg-black/10 z-10" />

    <Image
      src="https://res.cloudinary.com/dq4l50k5a/image/upload/v1767756672/DSC09596_nt8q9c.jpg"
      alt="Wedding Couple"
      fill
      priority
      className="object-cover object-center"
      sizes="100vw"
    />
  </section>
    {/* IMAGE 3  */}
 <section className="relative w-full h-[45vh] sm:h-[55vh] md:h-[75vh] lg:h-[85vh] overflow-hidden border-20 border-white">
    <div className="absolute inset-0 bg-black/10 z-10" />

    <Image
      src="https://res.cloudinary.com/dq4l50k5a/image/upload/v1767756673/FIN_qakbd5.jpg"
      alt="Wedding Couple"
      fill
      priority
      className="object-cover object-center"
      sizes="100vw"
    />
  </section>
</div>

    
  );
}
