import React from "react";
import Login from "../../components/forms/formLogin";
import "./login.css";

const LoginScreen: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="login-screen">
      <div className="login-form">
        <h2>Login</h2>
        <Login onLogin={handleLogin} />
      </div>
      <div className="login-image">
        <img src="https://via.placeholder.com/400x400" alt="Imagem de login" />
      </div>
    </div>
  );
};

export default LoginScreen;
