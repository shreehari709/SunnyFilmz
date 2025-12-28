"use client";
import Link from "next/link";
import Image from "next/image";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FDF2F0] text-[#333]">
    
      {/* FIXED OVERLAP: 
        Added 'pt-24' (approx 96px) to push content down below the fixed navbar. 
        Also changed height to 'min-h-[60vh]' for better mobile support.
      */}
      <main className="pt-4"> 
        
        {/* 1. Hero Image Section */}
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

        {/* 2. Intro Text Section */}
        <section className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-medium mb-4 md:mb-6 text-gray-900 leading-tight">
            Capture the best moments of your day
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base max-w-2xl mx-auto">
            We believe in honest, authentic storytelling. Our goal is to capture the raw emotions 
            and beautiful details that make your wedding day uniquely yours.
          </p>
          <Link href="/booking">
            <button className="bg-[#EBC2B5] text-[#1a1a1a] hover:bg-[#e0b0a0] px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold tracking-widest transition-colors">
              Book Your Session
            </button>
          </Link>
        </section>

        {/* 3. Three Column Cards (Responsive Grid) */}
        {/*
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
            {[
              { title: "Portfolio", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500", link: "/gallery", btn: "View Gallery" },
              { title: "Rates", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500", link: "/Pricing", btn: "Book a Shoot", primary: true },
             
            ].map((item, idx) => (
              <div key={idx} className="bg-[#F9F4F2] p-6 rounded-[2rem] text-center shadow-sm hover:shadow-md transition duration-300">
                <div className="h-64 mb-6 rounded-2xl overflow-hidden relative">
                  <Image src={item.img} alt={item.title} fill className="object-cover hover:scale-105 transition duration-500" />
                </div>
                <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
                <Link href={item.link}>
                  <button className={`w-full py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors ${item.primary ? 'bg-[#EBC2B5] text-[#1a1a1a] hover:bg-[#e0b0a0]' : 'bg-[#1a1a1a] text-white hover:bg-gray-800'}`}>
                    {item.btn}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>
       ...*/}
        {/* ... (Keep your Wavy Separator and Reviews section here) ... */}
        
      </main>
    </div>
  );
}