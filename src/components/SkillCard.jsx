export default function SkillCard({ skill }) {
  return (
    <div className="border p-6 rounded shadow-sm">
      <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
      <p className="text-gray-600">{skill.description}</p>
      <p className="text-sm text-gray-500 mt-2">
        Outils : {skill.tools}
      </p>
    </div>
  );
}
