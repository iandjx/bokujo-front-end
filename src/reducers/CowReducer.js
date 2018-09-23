import { COW_FETCH_SUCCESS, FETCH_COWS } from "../actions/types";
import {
  FETCHING_COWS,
  FETCHING_COWS_SUCCESS,
  FETCHING_COWS_FAILURE
} from "../actions/types";
const INITIAL_STATE = {
  cows: [],
  isFetching: false,
  error: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_COWS:
      return {
        ...state,
        cows: [],
        isFetching: true
      };
    case FETCHING_COWS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        cows: action.data.cows
      };
    case FETCHING_COWS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
};
