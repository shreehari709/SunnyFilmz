import BookButton from "./BookButton";
export default function IntroSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-center">
      <h1 className="text-3xl md:text-5xl font-serif font-medium mb-4 md:mb-6 text-gray-900 leading-tight">
        Capture the best moments of your day
      </h1>

      <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base max-w-2xl mx-auto">
        We believe in honest, authentic storytelling. Our goal is to capture the
        raw emotions and beautiful details that make your wedding day uniquely
        yours.
      </p>

      <BookButton />
    </section>
  );
}
