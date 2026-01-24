"use client";
interface CloseButtonProps {
  onClick: () => void;
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button className="close-btn" onClick={onClick}>
      ×
    </button>
  );
}
