function Badge({ label, isSelected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-14 w-full items-center justify-center rounded-full border text-sm font-medium transition-all ${
        isSelected
          ? "border-primary bg-primary text-white shadow-md"
          : "border-primary/40 bg-surface text-text hover:border-primary hover:bg-primary/5"
      }`}
    >
      {label}
    </button>
  );
}

export default Badge;