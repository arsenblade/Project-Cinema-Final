import axios from "axios";
import { API_URL } from "../constant/serverPath";


export const axiosPublic = axios.create({
  baseURL: API_URL
})