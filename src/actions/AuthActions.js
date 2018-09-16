import {
  CREDENTIAL_UPDATE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from "./types";
import axios from "axios";
import { Actions } from "react-native-router-flux";

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
      .then(response => loginUserSuccess(dispatch, response))
      .catch(error => console.log(error));
  };
};

const loginUserSuccess = (dispatch, response) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
  Actions.main({ token: response.data });
};
