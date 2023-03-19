import { axios } from "./axios";
import type { IRegisterSchema } from "@/schema/authSchema";

interface ILoginSchema {
  email: string;
  password: string;
}

export async function login(body: ILoginSchema) {
  return axios.post("/login", body).then((resp) => resp.data);
}

export async function register(body: IRegisterSchema) {
  return axios.post("/register", body).then((resp) => resp.data);
}
