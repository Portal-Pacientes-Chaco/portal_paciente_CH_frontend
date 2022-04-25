import {  API_ENDPOINTS_LOGINADMIN, LOGIN_HEADER } from "../constants/api.constants";
import { post } from "./httpServices";

export default async function loginService() { //hardcode
  try {
    const searchParams = new URLSearchParams({
      username: "admin",
      password: "admin123",
    });
    let data = searchParams.toString();
    const promise = await post(API_ENDPOINTS_LOGINADMIN, LOGIN_HEADER(), data);
    return promise;
  } catch (err) {
    console.log("Error al iniciar sesión: ", err);
  }
}
