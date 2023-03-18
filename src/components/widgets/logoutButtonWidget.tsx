import React, { useState } from 'react';
import "../styles/widgets/logoutButtonWidget.css"
import { useNavigate } from "react-router-dom";
import ModalConfirm from '../modals/confirmModal';


const LogoutButton: React.FC = () => {
    const navigation = useNavigate();
    const [confirm, setConfirm] = useState(false);

    const confirmDelete = (flag:boolean) => {
        if(flag){
          setConfirm(false);
          logout();
        }else{
          setConfirm(false);
        }
      }

      const flag = () => {
        setConfirm(true)
      }

    const logout = () => {
        localStorage.removeItem('user')
        navigation('/login')
    }

    return (
        <div className='container-logout'>
            <ModalConfirm showConfirm={confirm} message={'Are you sure?'} onConfirm={confirmDelete} />
            <a target={'_blank'} href={process.env.REACT_APP_H_REF}>
                <img className="logo-logout" src="../images/logo-completo-preto.png" alt="logo-compasso" />
            </a>
            <div className='logout-icone'>
                <button className='logout' id='logout' onClick={flag}>
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