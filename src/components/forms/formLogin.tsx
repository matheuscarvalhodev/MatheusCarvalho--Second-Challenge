import { stringify } from "querystring";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/postLogin";
import Modal from "../modals/modal";
import ModalLoading from "../modals/modalLoading";
import "../styles/forms/formLogin.css";


const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState<string[]>([]);
  const [showLoadingModal, setShowLoadingModal] = useState(false);

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowLoadingModal(true);
    try {
      const newUser = await loginUser(username, password);
      if (newUser.status === 200) {
        navigate('/dashboard', { state: { id: newUser.data.user.email } });
        localStorage.setItem('token', newUser.data.token);
        localStorage.setItem(`user ${newUser.data.user.email}`, JSON.stringify(newUser.data.user))
      }else if(newUser.status === 403){
        setModalMessage(['Invalid username or password']);
        setShowModal(true);
      }
      else {
        setModalMessage([`${newUser.data}`]);
        setShowModal(true);
      }
    } catch (error:any) {
      setModalMessage([`${error.message}`]);
      setShowModal(true);
    } finally {
      setShowLoadingModal(false);
    }
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
        {showLoadingModal && (
        <ModalLoading/>
      )}
    </div>
  );
};

export default Login;
