import SignupForm from "../../components/forms/formNewUser";
import './newUser.css'

const NewUserScreen: React.FC = () => {

  return (
    <div className="newUser-screen">
      <div className="newUser-form">
        <div className="container-textNewUser">
          <div className="textNewUser">
            <h2>Welcome,</h2>
            <p>Please, register to continue.</p>
          </div>
        </div>
        <SignupForm />
      </div>
      <div className="newUser-image">
      </div>
    </div>
  );
};

export default NewUserScreen;