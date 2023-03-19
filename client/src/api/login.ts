import { axios } from "./axios";

interface ILoginSchema {
  email: string;
  password: string;
}

export async function login(body: ILoginSchema) {
  return axios.post("/login", body).then((resp) => resp.data);
};

interface IRegisterSchema {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }

export async function register(body: IRegisterSchema) {
  return axios.post("/register", body).then((resp) => resp.data);
};
