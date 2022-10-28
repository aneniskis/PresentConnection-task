import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://pctask.herokuapp.com/",
});
// export const axiosInstance = axios.create({
//   baseURL: "http://localhost:8000/",
// });
