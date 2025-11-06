import axios from 'axios';
import {Platform} from 'react-native';

// Androidエミュレータの場合は10.0.2.2を使用、iOSシミュレータ・実機の場合はlocalhost/IPアドレスを使用
const getBaseURL = () => {
  if (__DEV__) {
    // Androidエミュレータの場合
    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:8080/api';
    }
    // iOSシミュレータ・実機の場合
    return 'http://localhost:8080/api';
  }
  return 'https://your-production-url.com/api';
};

const API_BASE_URL = getBaseURL();

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// リクエストインターセプター
apiClient.interceptors.request.use(
  config => {
    // 必要に応じてトークンを追加
    // const token = await AsyncStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// レスポンスインターセプター
apiClient.interceptors.response.use(
  response => response,
  error => {
    // エラーハンドリング
    if (error.response) {
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      console.error('Network Error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  },
);

export default apiClient;

