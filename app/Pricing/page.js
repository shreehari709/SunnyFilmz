"use client";

import Navbar from "../../components/Navbar";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const pricingPlans = [
    {
      name: "Basic",
      price: "₹35,000",
      features: [
        "Photo",
        "Video",
        "250 Edited Pictures",
        "25 Sheets Album",
        "Traditional Video",
        "Cinematic Video",
        "Wedding Highlights Video",
      ],
    },
    {
      name: "Standard",
      price: "₹60,000",
      bestValue: true,
      features: [
        "Photo + Candid",
        "Video",
        "350 Edited Pictures",
        "30 Sheets Album",
        "Traditional Video",
        "Teaser Video",
        "Drone Video",
        "Cinematic Video",
        "Wedding Highlights Video",
      ],
    },
    {
      name: "Premium",
      price: "₹80,000",
      features: [
        "Photo + Candid",
        "Video",
        "400 Edited Pictures",
        "40 Sheets Premium Album",
        "Mini Album",
        "Calendar",
        "4 Photo Frames",
        "Traditional Video",
        "Teaser Video",
        "Drone Video",
        "Cinematic Video",
        "Wedding Highlights Video",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#FFF4EF] text-[#2C2C2C]">
      <Navbar />

      {/* HERO */}
      <section className="text-center px-6 py-20">
        <h2 className="text-sm tracking-widest text-[#C77A63] font-semibold">
          PRICING
        </h2>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold mt-4">
          Capture the best moments of your day
        </h1>
        <p className="max-w-xl mx-auto mt-4 text-gray-600">
          Honest, authentic storytelling to preserve emotions and memories
          that last forever.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl p-8 shadow-md transition hover:shadow-xl ${
                plan.bestValue
                  ? "border-2 border-[#E6A28C]"
                  : "border border-gray-200"
              }`}
            >
              {plan.bestValue && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E6A28C] text-white text-xs px-4 py-1 rounded-full">
                  Best Value
                </span>
              )}

              <h3 className="text-xl font-serif font-semibold text-center">
                {plan.name}
              </h3>

              <p className="text-center text-3xl font-semibold mt-4 text-[#C77A63]">
                {plan.price}
              </p>

              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-[#C77A63]">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
                
              <button
                onClick={() => router.push("/booking")}
                className="mt-8 w-full py-3 rounded-full bg-[#F1C1AF] text-[#2C2C2C] font-semibold hover:bg-[#E6A28C] transition"
              >
                Book Your Session
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
    <p className="text-lg font-semibold text-[#C77A63] pb-20">
      Contact Sunny: <span className="text-[#2C2C2C]">6203007179</span>
    </p>
  </div>
      </section>
         
     
    </main>
  );
}
