import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useValidateUser } from "../../util/useValidateUser";
import Modal from "../modals/modal";
import "../styles/forms/formLogin.css";


const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState<string[]>([]);

  const isValidUser = useValidateUser(username, password);

  document.body.addEventListener("click", () => {
    if (showModal) {
      setShowModal(false);
    }
  });
  const handleUsernameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValidUser) {
      navigate("/dashboard", { state: { id: username } });
    } else {
      setModalMessage(["Invalid username or password"]);
      setShowModal(true);
    }
  };

  const onClose = () => {
    setShowModal(false);
  }

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
          <span className="input-icon">
            <img src="../images/user.png" alt="" />
          </span>
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
          <span className="input-icon">
            <img src="../images/password.png" alt="" />
          </span>
        </div>
        <button type="submit" className="formLogin-button">
          Log in
        </button>
        <Link style={{alignSelf:'start'}} to="/" className="link">
          No registration? Sign up
        </Link>
      </form>
      <Modal
          showModal={showModal}
          message={modalMessage}
        />
    </div>
  );
};

export default Login;
