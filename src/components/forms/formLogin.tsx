import React, { useState } from "react";
import "../styles/formLogin.css";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="container-formLogin">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-field">
          <input
            type="text"
            id="username"
            placeholder="user name"
            value={username}
            onChange={handleUsernameChange}
            className="form-input"
          />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.0711 12.9289C15.9819 11.8398 14.6855 11.0335 13.2711 10.5454C14.786 9.50199 15.7812 7.75578 15.7812 5.78125C15.7812 2.59348 13.1878 0 10 0C6.81223 0 4.21875 2.59348 4.21875 5.78125C4.21875 7.75578 5.21402 9.50199 6.72898 10.5454C5.31453 11.0335 4.01813 11.8398 2.92895 12.9289C1.0402 14.8177 0 17.3289 0 20H1.5625C1.5625 15.3475 5.34754 11.5625 10 11.5625C14.6525 11.5625 18.4375 15.3475 18.4375 20H20C20 17.3289 18.9598 14.8177 17.0711 12.9289ZM10 10C7.67379 10 5.78125 8.1075 5.78125 5.78125C5.78125 3.455 7.67379 1.5625 10 1.5625C12.3262 1.5625 14.2188 3.455 14.2188 5.78125C14.2188 8.1075 12.3262 10 10 10Z" fill="#E0E0E0" />
          </svg>

        </div>
        <div className="form-field">
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-input"
          />
          <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.0588 9.21569H15.2923V5.1848C15.2923 2.32588 12.9174 0 9.99819 0C7.07902 0 4.70407 2.32588 4.70407 5.1848V9.21569H2.94118C1.31941 9.21569 0 10.5351 0 12.1569V22.1569C0 23.7786 1.31941 25.098 2.94118 25.098H17.0588C18.6806 25.098 20 23.7786 20 22.1569V12.1569C20 10.5351 18.6806 9.21569 17.0588 9.21569ZM6.66485 5.1848C6.66485 3.40706 8.1602 1.96078 9.99819 1.96078C11.8362 1.96078 13.3315 3.40706 13.3315 5.1848V9.21569H6.66485V5.1848ZM18.0392 22.1569C18.0392 22.6975 17.5994 23.1373 17.0588 23.1373H2.94118C2.40059 23.1373 1.96078 22.6975 1.96078 22.1569V12.1569C1.96078 11.6163 2.40059 11.1765 2.94118 11.1765H17.0588C17.5994 11.1765 18.0392 11.6163 18.0392 12.1569V22.1569Z" fill="#E0E0E0" />
            <path d="M9 17C9 16.4477 9.44772 16 10 16C10.5523 16 11 16.4477 11 17V19C11 19.5523 10.5523 20 10 20C9.44772 20 9 19.5523 9 19V17Z" fill="#E0E0E0" />
          </svg>

        </div>
        <button type="submit" className="formLogin-button">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
