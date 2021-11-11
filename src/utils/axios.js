import axios from "axios";

export default {
  get: (url) => axios.get(url),
  post: (url, data) => axios.post(url, data),
  request: () => axios.request(),
  delete: (url) => axios.delete(url),
  head: (url) => axios.head(url),
  options: (url) => axios.options(url),
  put: (url, data) => axios.put(url, data),
};
