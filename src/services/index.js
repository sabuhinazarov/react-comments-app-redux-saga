import axios from "axios";

import { API_BASE_URL } from "../consts";

export const APIClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {},
});
