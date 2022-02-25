import http from "./httpService";
import config from "../config.json";

export function getGenres() {
  return http.get(config.apiUrl + "/genres");
}

//We should not store the link here, Instead it should be stored in config file.
