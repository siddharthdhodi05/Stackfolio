const SkillBadge = ({ skill, onDelete }) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm">
      <span>{skill}</span>
      <button
        type="button"
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 px-2"
      >
        X
      </button>
    </div>
  );
};

export default SkillBadge;
