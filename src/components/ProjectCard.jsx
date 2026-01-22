export default function ProjectCard({ project }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-3">{project.description}</p>
      <p className="text-sm text-blue-600">
        Compétences : {project.skills.join(", ")}
      </p>
    </div>
  );
}
