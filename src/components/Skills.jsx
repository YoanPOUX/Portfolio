import skills from "../data/skills";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="py-16 max-w-6xl mx-auto px-6">
      <h2 className="text-2xl font-bold mb-8">Compétences</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}
