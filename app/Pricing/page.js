import Navbar from "../../components/Navbar";
import PricingCard from "../../components/pricing/PricingCard";
import { pricingPlans } from "../../components/pricing/pricingData";

export default function PricingPage() {
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

      {/* PRICING */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-[#C77A63] pb-20">
            Contact Sunny:{" "}
            <span className="text-[#2C2C2C]">6203007179</span>
          </p>
        </div>
      </section>
    </main>
  );
}
