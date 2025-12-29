import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import dynamic from "next/dynamic";

const ReviewsSection = dynamic(() => import("./Reviews"), {
  loading: () => (
    <p className="text-center py-20 text-gray-500">
      Loading reviews...
    </p>
  ),
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FDF2F0] text-[#333]">
      <main className="pt-4">
        <HeroSection />
        <IntroSection />

    
      </main>
    </div>
  );
}
