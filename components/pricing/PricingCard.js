"use client";

import { useRouter } from "next/navigation";

export default function PricingCard({ plan }) {
  const router = useRouter();

  return (
    <div
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
          <li key={feature} className="flex gap-2">
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
  );
}
