export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p style={{ fontSize: '0.875rem', color: '#2563eb' }}>
        Compétences : {project.skills.join(", ")}
      </p>
    </div>
  );
}
