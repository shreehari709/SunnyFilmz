"use client";

import Image from "next/image";

const galleryData = [
  {
    title: "Diana & Edgar",
    image: "https://res.cloudinary.com/dq4l50k5a/image/upload/v1766682354/sw4_gngpww.jpg",
  },
  {
    title: "Michelle & Jake",
    image: "https://res.cloudinary.com/dq4l50k5a/image/upload/v1766682352/sw3_agjqqq.jpg",
  },
  {
    title: "Jon & Jenny",
    image: "https://res.cloudinary.com/dq4l50k5a/image/upload/v1766682344/sw6_olqvhl.jpg",
  },
  {
    title: "Emma & Lucas",
    image: "https://res.cloudinary.com/dq4l50k5a/image/upload/v1766682349/sw5_czsfc5.jpg",
    blackWhite: true,
  },
];

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-md px-4 py-16">
      
      {/* Heading */}
      <h1 className="mb-10 text-center text-2xl font-light tracking-widest">
        Wedding <span className="italic">Stories</span>
      </h1>

      {/* Gallery */}
      <div className="space-y-14">
        {galleryData.map((item, index) => (
          <div key={index} className="text-center">
            
            {/* Image */}
            <div className="relative mx-auto w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={550}
                className={`w-full object-cover ${
                  item.blackWhite ? "grayscale" : ""
                }`}
              />
            </div>

            {/* Caption */}
            <p className="mt-4 text-xs uppercase tracking-widest text-gray-500">
              Wedding
            </p>
            <h3 className="mt-1 text-sm font-medium tracking-wide">
              {item.title}
            </h3>

          </div>
        ))}
      </div>
    </section>
  );
}
