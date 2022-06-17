import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:3100/members/',
  baseURL: 'https://boiling-depths-63551.herokuapp.com/members/',
  headers: {
    'Authorization': 'Bearer <token>',
    'X-Custom-Header': 'foobar'
  }
});
