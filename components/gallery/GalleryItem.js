import Image from "next/image";

export default function GalleryItem({ item }) {
  return (
    <div className="text-center">
      <div className="relative mx-auto w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={550}
          sizes="(max-width: 768px) 100vw, 400px"
          className={`w-full object-cover ${
            item.blackWhite ? "grayscale" : ""
          }`}
        />
      </div>

      <p className="mt-4 text-xs uppercase tracking-widest text-gray-500">
        Wedding
      </p>
      <h3 className="mt-1 text-sm font-medium tracking-wide">
        {item.title}
      </h3>
    </div>
  );
}
