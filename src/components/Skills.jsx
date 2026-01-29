import { useState } from "react";
import skills from "../data/skills";
import SkillCard from "./SkillCard";
import SkillModal from "./SkillModal";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const openSkill = (skill) => setSelectedSkill(skill);
  const closeSkill = () => setSelectedSkill(null);

  return (
    <section id="skills">
      <h2>Compétences</h2>
      <div className="grid-2">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} onOpen={openSkill} />
        ))}
      </div>
      {selectedSkill && <SkillModal skill={selectedSkill} onClose={closeSkill} />}
    </section>
  );
} 
