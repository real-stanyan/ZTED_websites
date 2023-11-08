type UserInfo = {
  registerEmail: string;
  name: string;
  phoneNum: string;
  companyName: string;
  position: string;
  annualRevenue: double;
  classType: string;
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

type UserLogin = {
  email: string;
  password: string;
};

type UserRegister = {
  name: string;
  email: string;
  phoneNum: string;
  password: string;
  confirmPassword: string;
};

type User = {
  name: string;
  email: string;
  time: string;
};

type Admin = {
  name: string;
  email: string;
  position: string;
};
