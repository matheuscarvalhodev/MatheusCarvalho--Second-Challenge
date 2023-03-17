export interface Task {
  id:string;
  task: string;
  dayOfWeek: string;
  time: string;
}

export interface SignupFormData {
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  city: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginFormData{
    user:string;
    password:string;

}

export const errorMessages: { [key: string]: string } = {
  'firstName': 'Invalid name, try using only letters and spaces',
  'lastName': 'Invalid last name, try using only letters and spaces',
  'birthDate': 'Invalid birth date',
  'country': 'Invalid country, try using only letters and spaces',
  'city': 'Invalid city, try using only letters and spaces',
  'email': 'Invalid email or already in use',
  'password': 'Invalid password. Your password must contain at least one number, one lower case letter, one upper case letter, one special character and be at least 4 characters long',
  'confirmPassword': 'Passwords do not match',
};