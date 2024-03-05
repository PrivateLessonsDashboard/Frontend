import axios from "axios";

export const httpClient = axios.create({
  baseURL: `http://localhost:4000/api` /* #TODO - Change this address to docker container name with backend */,
  withCredentials: true,
});