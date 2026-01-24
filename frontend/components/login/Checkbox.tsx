"use client";
interface CheckboxProps {
  label: string;
  checked: boolean;
  setChecked: (v: boolean) => void;
  showError?: boolean;
}

export default function Checkbox({
  label,
  checked,
  setChecked,
  showError,
}: CheckboxProps) {
  return (
    <label
      className={`checkbox-label ${checked ? "checked" : ""} ${
        showError && !checked ? "error" : ""
      }`}
    >
      <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      <span className="tick"></span>
      {label}
    </label>
  );
}
