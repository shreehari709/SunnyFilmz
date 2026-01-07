import Image from "next/image";
export default function CrewCard({ member }) {
  return (
   <div className="bg-[#111827] rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-center">
      <Image
        src={member.image}
        alt={member.name}
        width={128}
        height={128}
        className="rounded-full object-cover"
        sizes="(max-width: 640px) 128px, 128px"
      />

      <div>
        <h3 className="text-xl font-semibold text-white">
          {member.name}
        </h3>

        <p className="text-yellow-400">{member.role}</p>

        <p className="text-gray-400 text-sm mt-2">
          Passionate about capturing emotions and stories.
        </p>
      </div>
    </div>
  );
}
