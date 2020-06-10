import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { HTTP_AUTH, HTTP_BASE_URL } from '../common/constants';

const client = axios.create({
  baseURL: HTTP_BASE_URL,
  headers: {
    Authorization: HTTP_AUTH
  }
});

const HttpService = function(options: AxiosRequestConfig) {
  const onSuccess = function(response: AxiosResponse) {
    console.log('HttpService ok :>> ', response);
    return response.data;
  };

  const onError = function(error: AxiosError) {
    console.log('HttpService error :>> ', error);
    return Promise.reject(error);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default HttpService;
