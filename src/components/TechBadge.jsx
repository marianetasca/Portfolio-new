import { techColors, techIcons } from "../constants/techs";

const TechBadge = ({ tech }) => {
  const Icon = techIcons[tech];
  const color = techColors[tech];

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2 flex items-center gap-2 ${color}`}>
      {Icon && <Icon size={16} />}
      {tech}
    </span>
  );
};

export default TechBadge;