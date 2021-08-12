import axios from "axios";
import { BASE_URL, token } from "../utils/variables";

const headers = {
  headers: {
    "token": token
  }
}

export const createUser = async (data) => {
  data.password = "welcome1"
  const apiResponse = await axios
    .post(`${BASE_URL}/v1/user`, data, headers)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err.message)
    })

  return apiResponse;
};


export const getUsers = async () => {
  const apiResponse = await axios
    .get(`${BASE_URL}/v1/users`, headers)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err.message)
    })

  return apiResponse;
}