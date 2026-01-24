"use client";

interface HomeStartProps {
  onLoginClick: () => void;
}

export default function HomeStart({ onLoginClick }: HomeStartProps) {
  return (
    <div className="home-start">
      <h1 className="home-title">Witaj na naszej stronie</h1>
      <button className="home-login-btn" onClick={onLoginClick}>
        Zaloguj się
      </button>
    </div>
  );
}
