"use client";
import { useState } from "react";
import HomeStart from "../components/home/HomeStart";
import LoginCard from "../components/login/LoginCard";

export default function Page() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <main className="login-page">
      {!showLogin && <HomeStart onLoginClick={() => setShowLogin(true)} />}
      {showLogin && <LoginCard onClose={() => setShowLogin(false)} />}
    </main>
  );
}
