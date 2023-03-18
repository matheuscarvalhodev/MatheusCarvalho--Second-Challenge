import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/post/postLogin";
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
  const [emptyField, setEmptyField] = useState(false);

  document.body.addEventListener("click", () => {
    if (showModal) {
      setShowModal(false);
    }
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username || !password) {
      setEmptyField(!username);
    } else {
      setShowLoadingModal(true);
      try {
        const login = await loginUser(username, password);
        console.log(login.data)
        if (login.status === 200) {
          navigate('/dashboard');
          localStorage.setItem('user', JSON.stringify(login.data));
        } else if (login.status === 403) {
          setModalMessage(['Invalid username or password']);
          setShowModal(true);
        }
        else if (login.status === 400) {
          setModalMessage(['Incorrect Values']);
          setShowModal(true);
        }
        else if (login.status === 500) {
          setModalMessage(['Server error']);
          setShowModal(true);
        }
        else {
          setModalMessage([`${login.data}`]);
          setShowModal(true);
        }
      } catch (error: any) {
        setModalMessage([`${error.message}`]);
        setShowModal(true);
      } finally {
        setShowLoadingModal(false);
      }
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
            onChange={(event) =>{setUsername(event.target.value); setEmptyField(false);}}
            className={`form-input ${emptyField ? 'error' : ''}`}
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
            onChange={(event) => {setPassword(event.target.value); setEmptyField(false);}}
            className={`form-input ${emptyField ? 'error' : ''}`}
          />
          <span className="input-icon">
            <img src="../images/password.png" alt="" />
          </span>
        </div>
        <button type="submit" className="formLogin-button">
          Log in
        </button>
        <Link style={{ alignSelf: 'start' }} to="/" className="link">
          No registration? Sign up
        </Link>
      </form>
      <Modal
        showModal={showModal}
        message={modalMessage}
      />
      {showLoadingModal && (
        <ModalLoading />
      )}
    </div>
  );
};

export default Login;
