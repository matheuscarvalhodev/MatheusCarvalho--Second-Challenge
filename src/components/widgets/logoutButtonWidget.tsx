import React from 'react';
import "../styles/widgets/logoutButtonWidget.css"
import { useNavigate } from "react-router-dom";

interface LogoutProps {
    user: string
}

const LogoutButton: React.FC<LogoutProps> = ({ user }) => {
    const navigation = useNavigate();
    const logout = () => {
        localStorage.removeItem(`user ${user}`)
        localStorage.removeItem('token')
        navigation('/login')
    }

    return (
        <div className='container-logout'>
            <a target={'_blank'} href={process.env.REACT_APP_H_REF}>
                <img className="logo-logout" src="../images/logo-completo-preto.png" alt="logo-compasso" />
            </a>

            <div className='logout-icone'>
                <button className='logout' id='logout' onClick={logout}>
                    <img className="seta-logout" src="../images/seta-logout.png" alt="seta-compasso" />
                    <label>
                        Logout
                    </label>
                </button>
            </div>
        </div>
    );
};

export default LogoutButton;