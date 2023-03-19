import { axios } from "./axios";
import type { ILoginSchema, IRegisterSchema } from "@/schema/authSchema";

export async function login(body: ILoginSchema) {
  return axios.post("/login", body).then((resp) => resp.data);
}

export async function register(body: IRegisterSchema) {
  return axios.post("/register", body).then((resp) => resp.data);
}
