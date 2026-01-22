import skills from "../data/skills";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section id="skills">
      <h2>Compétences</h2>
      <div className="grid-2">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}
