import axios from 'axios';
import baseURL from '../db/database';

// make axios calls
export const userAPI = {
  getAll() {
    return axios.get(`${baseURL}/user/`);
  },
  getById(id) {
    return axios.get(`${baseURL}/user/${id}`);
  },
  add(item) {
    return axios.post(`${baseURL}/user/`, item);
  },
  update(id, item) {
    return axios.post(`${baseURL}/user/${id}`, item);
  },
  delete(id) {
    return axios.delete(`${baseURL}/user/${id}`);
  }
};
