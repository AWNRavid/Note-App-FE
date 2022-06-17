import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3100/',
  // baseURL: 'https://vast-sierra-64095.herokuapp.com/',
  headers: {
    'Authorization': 'Bearer <token>',
    'X-Custom-Header': 'foobar',
  }
});
