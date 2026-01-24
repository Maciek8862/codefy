"use client";
import { useState } from "react";
import InputField from "./InputField";
import Checkbox from "./Checkbox";
import CloseButton from "./CloseButton";
import ExtraOptions from "./ExtraOptions";

interface LoginCardProps {
  onClose: () => void;
}

export default function LoginCard({ onClose }: LoginCardProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms || !acceptPrivacy) {
      setLoginError(true);
      setTimeout(() => setLoginError(false), 2000);
      return;
    }
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login-card">
      <CloseButton onClick={onClose} />
      <h1 className="login-title">Zaloguj się</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <InputField
          type="password"
          placeholder="Hasło"
          value={password}
          setValue={setPassword}
        />
        <div className="checkboxes">
          <Checkbox
            label="Akceptuję regulamin serwisu"
            checked={acceptTerms}
            setChecked={setAcceptTerms}
            showError={loginError}
          />
          <Checkbox
            label="Zapoznałem/am się z polityką prywatności"
            checked={acceptPrivacy}
            setChecked={setAcceptPrivacy}
            showError={loginError}
          />
        </div>
        <button className="login-btn" type="submit">
          Zaloguj się
        </button>
        <ExtraOptions />
      </form>
    </div>
  );
}
