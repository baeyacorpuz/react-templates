import axios from "axios";
import { BASE_URL } from "../utils/variables";

export const login = async (data) => {

  const apiResponse = await axios
    .post(`${BASE_URL}/login`, data)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err.message)
    })

  return apiResponse;
}

export const signup = async (data) => {
  const apiResponse = await axios
    .post(`${BASE_URL}/signup`, data)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err.message)
    })

  return apiResponse;
}