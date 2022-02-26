import axios from "axios";
import auth from "./authService";
import { toast } from "react-toastify";

axios.defaults.headers.common["x-auth-token"] = auth.getJwt();
//By this we are telling axios, whenever you are making any http request, include this header in the request.
//otherwise we will be getting a 401 error fo unauthorization while editing movie form.

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("Logging in the error", error);
    toast.error("An unexpected error occurred.");
  }
  return Promise.reject(error);
});

//http interceptors are the default configurations that are added automatically to every request or response that a user receives. It is useful to check response status code for every response that is being received.
//If there is any error, control will pass from here to catch block.
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
