import { Link } from "react-router-dom";
import { ErroPropos } from "../../util/interfaces";
import "./erroPage.css"


const ErroPage: React.FC<ErroPropos> = ({message, rota, button}) => {

    return (
        <div className="erro404">
            <div className="erro404-text">
                <h1>{message}</h1>
                <Link to={rota}>
                    <button type="button" className="erro404-button">
                        {button}
                    </button>
                </Link>
            </div>
            <div className="erro404-logo"><img src="../images/logo.png" alt="logo-compasso" /></div>
        </div>
    )
}

export default ErroPage;