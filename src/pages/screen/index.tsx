import React from "react";
import { ScreenProps } from "../../util/interfaces";
import "./screen.css";

const Screen: React.FC<ScreenProps> = ({ title, subtitle, children, typeScreen }) => {

  return (
    <div className={`${typeScreen}-screen`}>
      <div className={`${typeScreen}-form-user`}>
        <div className={`container-text-${typeScreen}`}>
          <div className={`text-${typeScreen}`}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
        {children}
      </div>
      <div className="screen-image">
        <a target={'_blank'} href={process.env.REACT_APP_H_REF}><img className="logo" src="../images/logo-completo.png" alt="logo-compasso" /></a>
      </div>
    </div>
  );
};

export default Screen;
