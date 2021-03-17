import Config from "./Config";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
class AuthHandler {
  static login(username, password, callback) {
    axios
      .post(Config.loginUrl, { username: username, password: password })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          reactLocalStorage.set("token", response.data.access);
          reactLocalStorage.set("refresh", response.data.refresh);
          callback({ error: false, message: "Login Successfull..." });
        }
      })
      .catch((error) => {
        callback({
          error: true,
          message: "Error During Login Invalid Login Details..",
        });
      });
  }

  static loggedIn() {}
}

export default AuthHandler;
