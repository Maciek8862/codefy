"use client";
import { useState } from "react";

interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  setValue: (v: string) => void;
}

export default function InputField({
  type,
  placeholder,
  value,
  setValue,
}: InputFieldProps) {
  const [show, setShow] = useState(false);
  const inputType = type === "password" ? (show ? "text" : "password") : type;

  return (
    <div className="input-group">
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {type === "password" && (
        <button
          type="button"
          className="show-pass-btn"
          onClick={() => setShow(!show)}
        >
          {show ? "🙈" : "👁"}
        </button>
      )}
    </div>
  );
}
