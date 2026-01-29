export default function SkillCard({ skill, onOpen }) {
  const borderStyle = { borderLeft: `4px solid ${skill.color}`, paddingLeft: '1rem' };

  return (
    <div
      className="card clickable"
      style={borderStyle}
      onClick={() => onOpen && onOpen(skill)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && onOpen) onOpen(skill);
      }}
    >
      <h3 style={{ color: skill.color }}>{skill.title}</h3>
      <p>{skill.description}</p>
      <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
        Outils : {skill.tools}
      </p>
    </div>
  );
} 
