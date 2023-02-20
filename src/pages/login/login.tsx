import React from "react";
import Login from "../../components/forms/formLogin";
import "./login.css";

const LoginScreen: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="login-screen">
      <div className="login-formUser">
        <div className="container-text">
          <div className="text">
            <h2>Welcome,</h2>
            <p>To continue browsing safely, log in to the network.</p>
          </div>
        </div>
        <Login onLogin={handleLogin} />
      </div>
      <div className="login-image"></div>
    </div>
  );
};

export default LoginScreen;
