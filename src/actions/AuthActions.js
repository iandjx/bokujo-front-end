import {
  CREDENTIAL_UPDATE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from "./types";
import axios from "axios";

export const credentialUpdate = ({ prop, value }) => {
  return {
    type: CREDENTIAL_UPDATE,
    payload: { prop, value }
  };
};

export const loginUser = ({ username, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    axios
      .post("https://bokujo-rest-api.herokuapp.com/login", {
        username: username,
        password: password
      })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };
};
