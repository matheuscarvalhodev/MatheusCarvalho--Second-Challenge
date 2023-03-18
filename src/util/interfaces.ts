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

export interface PostTask{
  description: string;
  dayOfWeek: string;
}

export interface LoginFormData{
    user:string;
    password:string;

}

export interface TaskApi {
  _id: string
  description: string
  dayOfWeek: string
  userId: string
  createdAt: string
  updatedAt: string
}


export interface Response{
  status:number;
  data:Task[] | any;
}

export interface WeatherFullData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
  sys: {
    country: string;
    name: string;
  };
}

export interface WeatherProps {
  city: string;
  country:string
}

export interface DashboardProps {
  token: string;
}

export interface ErroPropos{
  message:string;
  rota:string;
  button:string
}

export interface ScreenProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  typeScreen:string;
}

export interface FormProps {
  aoAtualizar: () => void;
  selectedDay: string;
  taskList: [string, Task[]][]
  token:string;
}

export interface WeatherIconProps {
  weatherName: string;
  size:number;
}

export interface ConfirmModalProps {
  onConfirm: (flag:boolean) => void;
  showConfirm: boolean;
  message: string;
}

export interface ModalProps {
  showModal: boolean;
  message: string[];
}

export interface CardProps {
  flag: (id:string) => void;
  tarefa: Task;
  color: string;
  text: string;
}
