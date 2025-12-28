export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      
      <div>
        <p className="text-yellow-400 mb-2">Wedding Photography</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          We Capture <br /> Your Forever Moments
        </h1>
        <p className="text-gray-400 mt-6">
          Professional wedding photography & cinematography
          to make your special day timeless.
        </p>

        <button className="mt-8 px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold">
          Book Now
        </button>
      </div>

      <div className="flex justify-center">
        <img
          src="/hero.jpg"
          alt="Wedding"
          className="rounded-xl w-full max-w-md object-cover"
        />
      </div>

    </section>
  );
}
