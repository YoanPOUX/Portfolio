import { useEffect } from "react";
import projectsData from "../data/projects";

export default function SkillModal({ skill, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const relatedProjects = projectsData.filter(
    (p) => p.skills && p.skills.some((s) => s === skill.title || s.includes(skill.title) || skill.title.includes(s))
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Fermer">×</button>
        <h3 style={{ color: skill.color }}>{skill.title}</h3>
        <p>{skill.description}</p>
        <h4>Projets liés</h4>
        <div className="project-list">
          {relatedProjects.length ? (
            relatedProjects.map((pr, i) => (
              <div className="project-item" key={i}>
                <strong>{pr.title}</strong>
                <p>{pr.description}</p>
              </div>
            ))
          ) : (
            <p>Aucun projet lié.</p>
          )}
        </div>
      </div>
    </div>
  );
}
