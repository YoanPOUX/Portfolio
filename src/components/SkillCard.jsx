export default function SkillCard({ skill }) {
  return (
    <div className="card">
      <h3>{skill.title}</h3>
      <p>{skill.description}</p>
      <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
        Outils : {skill.tools}
      </p>
    </div>
  );
}
