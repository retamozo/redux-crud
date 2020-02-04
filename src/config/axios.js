import axios from "axios";

const AXIOS_CLIENT = axios.create({
  baseURL: "http://localhost:4000"
});

export default AXIOS_CLIENT;
