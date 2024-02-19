import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://alphaedu.portfolio-adilzhexenov.kz",
});

export default axiosInstance;
