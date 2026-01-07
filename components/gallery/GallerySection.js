import { galleryItems } from "../../data/gallery";
import GalleryItem from "./GalleryItem";


export default function GallerySection() {
  return (
    <section className="mx-auto max-w-md px-4 py-16">
      <h1 className="mb-10 text-center text-2xl font-light tracking-widest">
        Wedding <span className="italic">Stories</span>
      </h1>

      <div className="space-y-14">
        {galleryItems.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
