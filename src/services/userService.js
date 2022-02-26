import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}

//post req should have 3 properties.
//email : here we have taken user.username because in our reg. form we call this poroperty "username".
//password
//name
