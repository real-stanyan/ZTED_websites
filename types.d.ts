type UserInfo = {
  name: string;
  phone: string;
  company: string;
  occupation: string;
  incomes: string;
  learning_experience: string;
};

type CourseInfo = {
  title: string;
  items: string[];
};

type AdminLogin = {
  email: string;
  password: string;
};

type AdminRegister = {
  name: string;
  password: string;
  email: string;
  confirmPassword: string;
  position: string;
};

type UserRegister = {
  name: string;
  email: string;
  phoneNum: string;
  password: string;
  confirmPassword: string;
};
