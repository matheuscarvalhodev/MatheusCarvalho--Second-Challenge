import { useContext } from "react";
import { createContext} from "react";

interface User {
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  city: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const useValidateUser = (username: string, password: string) => {
  const userFromLocalStorage:User = JSON.parse(localStorage.getItem(`user ${username}`) || "{}");
  const UserContext = createContext<User>(userFromLocalStorage);

  const user = useContext(UserContext);

  return user.email === username && user.password === password;
};
