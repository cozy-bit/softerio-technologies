function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className="text-sm font-medium text-text-muted">{label}</label>}
      <input
        className="h-12 w-full rounded-xl border border-border bg-surface px-4 text-text outline-none transition-colors focus:border-primary"
        {...props}
      />
    </div>
  );
}

export default Input;