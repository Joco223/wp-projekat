import axios from "axios";

const BACKEND_URL = "http://127.0.0.1:8001";

export default {
  async registerUser(
    showname: string,
    username: string,
    password: string,
    em: string
  ) {
    const result = await axios.post(BACKEND_URL + "/register", {
      show: showname,
      user: username,
      pass: password,
      email: em,
    });

    return result;
  },

  async loginUser(username: string, password: string) {
    const result = await axios.post(BACKEND_URL + "/login", {
      user: username,
      pass: password,
    });

    return result;
  },
};
