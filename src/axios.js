import axios from 'axios';

const instance = axios.create({
  baseURL:'http://localhost:5001/kashmerch-2f775/us-central1/api' //THE API (cloud function) URL
});

export default instance;

//better than JSfetch API and helps to use baseURL and easier than JSfetch