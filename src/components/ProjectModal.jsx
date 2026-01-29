import { useEffect } from "react";
import skillsData from "../data/skills";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const projectSkills = project.skills.map((s) => {
    const skill = skillsData.find((k) => k.title === s || k.title.includes(s) || s.includes(k.title));
    return { title: s, description: skill ? skill.description : null, color: skill ? skill.color : null };
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Fermer">×</button>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <h4>Compétences</h4>
        <div className="skill-list">
          {projectSkills.map((sk, i) => (
            <div className="skill-item" key={i}>
              <strong style={{ color: sk.color || "#111" }}>{sk.title}</strong>
              {sk.description && <p>{sk.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
