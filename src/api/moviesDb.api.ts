import axios from "axios";
import { getEnvVariables } from "../utilities";

const { VITE_MOVIES_DB_API_URL, VITE_MOVIES_DB_TOKEN } = getEnvVariables();

const moviesDbApi = axios.create({
  baseURL: VITE_MOVIES_DB_API_URL,
  headers: {
    'Authorization': `Bearer ${VITE_MOVIES_DB_TOKEN}`
  }
})

export default moviesDbApi;