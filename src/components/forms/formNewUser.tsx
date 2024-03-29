import { useState } from 'react';
import { SignupFormData } from '../../util/interfaces';
import { containsNumbers, emailValidation, isStrongPassword, isTextOnly, isValidDate } from '../../util/inputValidator';
import '../styles/forms/formNewUser.css';
import Modal from '../modals/modal';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../../api/post/postAddUser';
import ModalLoading from '../modals/modalLoading';
import { errorMessages } from '../../util/util';


const SignupForm = (): JSX.Element => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState<SignupFormData>({
    firstName: '',
    lastName: '',
    birthDate: '',
    country: '',
    city: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    birthDate: false,
    country: false,
    city: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  const [showModal, setShowModal] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);

  document.body.addEventListener("click", () => {
    if (showModal) {
      setShowModal(false);
    }
  });

  const [menssagem, setMensagem] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const hasError = Object.values(errors).some((error) => error);
    const isFormEmpty = Object.values(formData).every((value) => value === '');
    if (hasError || isFormEmpty) {
      setShowModal(true);
      const errorFields = Object.entries(errors)
        .filter(([key, value]) => value)
        .map(([key, value]) => key);

      setMensagem(errorFields.map((field) => errorMessages[field]))
    } else {
      setShowLoadingModal(true);
    try {
      const newUser = await createUser(formData);
      if (newUser.status === 201) {
        setMensagem(['Registration successful']);
        setShowModal(true);
        setTimeout(() => {
          navigate('/login');
        }, 5000);
      } else if (newUser.status === 500){
        setMensagem(["Server error"]);
        setShowModal(true);
      }
      else {
        setMensagem([`${newUser.data}`]);
        setShowModal(true);
      }
    } catch (error:any) {
      setMensagem([`${error.message}`]);
      setShowModal(true);
    } finally {
      setShowLoadingModal(false);
    }
      
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    let hasError = false;
    switch (name) {
      case 'firstName':
      case 'lastName':
      case 'country':
      case 'city':
        if (containsNumbers(value) || !isTextOnly(value) || value.trim() === '') {
          hasError = true;
        }
        break;
      case 'email':
        if (!emailValidation(value) || value.trim() === '') {
          hasError = true;
        }
        break;
      case 'birthDate':
        if (!isValidDate(value) || value.trim() === '') {
          hasError = true;
        }
        break;
      case 'password':
        if (!isStrongPassword(value) || value.trim() === '') {
          hasError = true;
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password || value.trim() === '') {
          hasError = true;
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: hasError,
    }));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <form className='formNewUser' onSubmit={handleSubmit}>
        <label>
          First name:
          <input placeholder='Your First Name' type="text" name="firstName" value={formData.firstName} required onChange={handleInputChange} onBlur={handleBlur}
            style={{ borderColor: errors.firstName ? '#E9B425' : undefined }} />
        </label>
        <br />
        <label>
          Last name:
          <input placeholder='Yout Last Name' type="text" name="lastName" value={formData.lastName} required onChange={handleInputChange} onBlur={handleBlur}
            style={{ borderColor: errors.lastName ? '#E9B425' : undefined }} />
        </label>
        <br />
        <label>
          Birth date:
          <input placeholder='MM/DD/YYYY' type="date" name="birthDate" value={formData.birthDate} required onChange={handleInputChange} onBlur={handleBlur}
            style={{ borderColor: errors.birthDate ? '#E9B425' : undefined }} />
        </label>
        <br />
        <label>
          Country:
          <input placeholder='Your Country' type="text" name="country" value={formData.country} required onChange={handleInputChange} onBlur={handleBlur}
            style={{ borderColor: errors.country ? '#E9B425' : undefined }} />
        </label>
        <br />
        <label>
          City:
          <input placeholder='Your City' type="text" name="city" value={formData.city} required onChange={handleInputChange} onBlur={handleBlur}
            style={{ borderColor: errors.city ? '#E9B425' : undefined }} />
        </label>
        <br />
        <label>
          E-mail:
          <input placeholder='A valid email here' type="email" name="email" value={formData.email} required onChange={handleInputChange} onBlur={handleBlur}
            style={{ borderColor: errors.email ? '#E9B425' : undefined }} />
        </label>
        <br />
        <label>
          Password:
          <input placeholder='Yout Password' type="password" name="password" value={formData.password} required onChange={handleInputChange} onBlur={handleBlur}
            style={{ borderColor: errors.password ? '#E9B425' : undefined }} />
        </label>
        <br />
        <label>
          Password:
          <input placeholder='Confirm your password' type="password" name="confirmPassword" value={formData.confirmPassword} required onChange={handleInputChange} onBlur={handleBlur}
            style={{ borderColor: errors.confirmPassword ? '#E9B425' : undefined }} />
        </label>
        <br />
        <button type="submit" className='formNewUser-button'>Register Now</button>
      </form>
      <Modal showModal={showModal} message={menssagem}/>
      {showLoadingModal && (
        <ModalLoading/>
      )}
      <Link to="/login" className='link'>Already have a registration? Sign in</Link>
    </div>
  );
};

export default SignupForm;
