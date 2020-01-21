import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.11.166.228:3333'
});

export default api; 