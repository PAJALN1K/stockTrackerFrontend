import axios from "axios";

export const defaultAPI = axios.create({
  baseURL: "http://localhost:8080",
});

export const registrationAPI = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginAPI = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// baseURL: "https://jsonplaceholder.typicode.com",
// withCredentials: true,
// headers: {
//   "Content-Type": "application/json",
//   "Content-Type": "multipart/form-data",
//   "Content-Type": `multipart/form-data; boundary=${newUser._boundary}`,
//   "Access-Control-Allow-Origin": "*",
// },
// params: {
//     _limit: limit,
//     _page: page,
// },
