import axios from "axios";
import { BASE_URL, token } from "../utils/variables";

const headers = {
  headers: {
    "token": token
  }
}

export const createBook = async (data) => {
  const apiResponse = await axios
    .post(`${BASE_URL}/v1/book`, data, headers)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err.message)
    })

  return apiResponse;
};

export const getBooks = async () => {
  const apiResponse = await axios
    .get(`${BASE_URL}/v1/book`, headers)
    .then((response) => response.data.book)
    .catch((err) => {
      console.log(err.message);
    });

  return apiResponse
};
