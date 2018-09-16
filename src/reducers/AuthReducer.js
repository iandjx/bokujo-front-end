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
    default:
      return state;
  }
};