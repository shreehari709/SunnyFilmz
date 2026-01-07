import Image from "next/image";

export default function GalleryItem({ item }) {
  return (
    <div className="text-center">
      <div className="relative mx-auto w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title || "Wedding photo"}
          width={400}
          height={550}
          sizes="(max-width: 768px) 100vw, 400px"
          unoptimized
          className="w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <p className="mt-4 text-xs uppercase tracking-widest text-gray-500">
        Wedding
      </p>

   
    </div>
  );
}
