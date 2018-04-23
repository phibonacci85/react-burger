import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-bc5c8.firebaseio.com/'
});

export default instance;