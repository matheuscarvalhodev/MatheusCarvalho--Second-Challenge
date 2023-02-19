import SignupForm from "../../components/forms/formNewUser";

const NewUserScreen: React.FC = () => {
 
    return (
      <div className="login-screen">
        <div className="login-form">
          <h2>Login</h2>
          <SignupForm/>
        </div>
        <div className="login-image">
          <img src="https://via.placeholder.com/400x400" alt="Imagem de login" />
        </div>
      </div>
    );
  };
  
  export default NewUserScreen;