import { crewMembers } from "@/data/crew";
import CrewCard from "./CrewCard";

export default function CrewSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-10 text-white">
        Our Crew
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {crewMembers.map((member) => (
          <CrewCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
