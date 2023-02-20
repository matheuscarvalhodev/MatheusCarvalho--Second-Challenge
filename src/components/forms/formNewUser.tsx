import { useState } from 'react';
import '../styles/formNewUser.css';

interface SignupFormData {
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  city: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm = (): JSX.Element => {
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form className='formNewUser' onSubmit={handleSubmit}>
      <label>
        First name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Last name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Birth date:
        <input type="date" name="birthDate" value={formData.birthDate} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Country:
        <input type="text" name="country" value={formData.country} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        E-mail:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit" className='formNewUser-button'>Register Now</button>
    </form>
  );
};

export default SignupForm;
