import axios from "axios";

//AXIOS DEFAULTS
const nextServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
  withCredentials: true,
});

export default nextServer;
