import http from "./httpService";

export function getGenres() {
  return http.get("http://localhost:3900/api/genres");
}

//We should not store the link here, Instead it should be stored in config file.
