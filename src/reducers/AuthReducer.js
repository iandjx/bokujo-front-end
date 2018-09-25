import {
  CREDENTIAL_UPDATE,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  username: "",
  password: "",
  user: null,
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREDENTIAL_UPDATE:
      console.log(action.payload.value);
      return { ...state, [action.payload.prop]: action.payload.value };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, token: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: "" };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: "Authentication Failed",
        password: "",
        loading: "false"
      };
    default:
      return state;
  }
};
