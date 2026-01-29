export default function ProjectCard({ project, onOpen }) {
  return (
    <div
      className="card clickable"
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen(project);
      }}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p style={{ fontSize: '0.875rem', color: '#2563eb' }}>
        Compétences : {project.skills.join(", ")}
      </p>
    </div>
  );
} 
