import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3100/members/',
  headers: {
    'Authorization': 'Bearer <token>',
    'X-Custom-Header': 'foobar'
  }
});
