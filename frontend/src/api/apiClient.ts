import axios from "axios";
import qs from "qs";

// axiosのインスタンスを作成
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
});

// axiosのリクエストのインターセプターを設定
apiClient.interceptors.request.use((config) => {
  // Todo: 認証情報の設定とか
  return config;
});

// axiosのレスポンスのインターセプターを設定
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
