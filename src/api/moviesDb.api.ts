import axios from "axios";
import { getEnvVariables } from "../utilities";

const { VITE_MOVIES_DB_API_URL } = getEnvVariables();

const moviesDbApi = axios.create({
  baseURL: VITE_MOVIES_DB_API_URL,
})

export default moviesDbApi;