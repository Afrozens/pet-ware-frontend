import axios from 'axios';

import { getCookieAuth } from '@/utils/auth';

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/`,
  withCredentials: true,
});

instance.interceptors.request.use(function (config) {
  const tokenCurrent = getCookieAuth();
  const token = typeof window !== 'undefined' ? 'bearer ' + tokenCurrent : '';

  (config.headers as any)['Authorization'] = token;
  return config;
});

export default instance;
