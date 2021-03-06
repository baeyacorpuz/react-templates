import axios from "axios";
import buildUrl from 'build-url';
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
    .get(`${BASE_URL}/v1/books`, headers)
    .then((response) => response.data.book)
    .catch((err) => {
      console.log(err.message);
    });

  return apiResponse
};


export const getCategories = async () => {
  const apiResponse = await axios
    .get(`${BASE_URL}/v1/categories`, headers)
    .then((response) => response.data.categories)
    .catch((err) => {
      console.log(err.message);
    });

  return apiResponse
}

export const getAuthors = async () => {
  const apiResponse = await axios
    .get(`${BASE_URL}/v1/authors`, headers)
    .then((response) => response.data.authors)
    .catch((err) => {
      console.log(err.message);
    });

  return apiResponse
}

export const getBookDetails = async (params) => {
  const paramsQuery = buildUrl('', {
    queryParams: {
      _id: params
    }
  });
  const apiResponse = await axios
    .get(`${BASE_URL}/v1/book${paramsQuery}`, headers)
    .then((response) => response.data.book)
    .catch((err) =>{
      console.log(err.message);
    })
  return apiResponse
}

export const getTerminologies = async () => {
  const apiResponse = await axios
    .get(`${BASE_URL}/v1/terminology`, headers)
    .then((response) => response.data.terminology)
    .catch((err) =>{
      console.log(err.message);
    })
  return apiResponse
}