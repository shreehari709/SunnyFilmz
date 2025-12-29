import Navbar from "../../components/Navbar";
import GallerySection from "../../components/gallery/GallerySection";

export const metadata = {
  title: "Gallery | Sunny Filmzz",
  description: "Wedding stories captured by Sunny Filmzz",
};

export default function GalleryPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <GallerySection />
    </main>
  );
}
