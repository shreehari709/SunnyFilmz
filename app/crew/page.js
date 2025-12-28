export default function Crew() {
  const crew = [
    {
      name: "Sunny Raj",
      role: "Lead Photographer",
      image: "https://res.cloudinary.com/dq4l50k5a/image/upload/v1766935670/IMG_0801_pq1ndh.jpg",
    },
    {
      name: "Shreehari Kalundia",
      role: "Cinematographer",
      image: "https://res.cloudinary.com/dq4l50k5a/image/upload/v1766935671/IMG_6724_lcu7vl.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-10">Our Crew</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {crew.map((member, i) => (
          <div
            key={i}
            className="bg-[#111827] rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">
                {member.name}
              </h3>
              <p className="text-yellow-400">{member.role}</p>
              <p className="text-gray-400 text-sm mt-2">
                Passionate about capturing emotions and stories.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
