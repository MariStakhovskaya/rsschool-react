import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.unsplash.com/search/photos',
  withCredentials: false,
});
