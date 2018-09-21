import axios from "axios";
import {
  FETCHING_COWS,
  FETCHING_COWS_SUCCESS,
  FETCHING_COWS_FAILURE
} from "../actions/types";

export const fetchCowsFromAPI = () => {
  return dispatch => {
    console.log("dispatch");
    axios
      .get("https://bokujo-rest-api.herokuapp.com/cows")
      .then(response => {
        // console.log(response.data);
        dispatch(getCowsSuccess(response.data));
      })
      .catch(error => console.log(error));
  };
};

// export function fetchCowsFromAPI() {
//   return dispatch => {
//     dispatch(getCows());
//     fetch("https://bokujo-rest-api.herokuapp.com/cows")
//       .then(data => data.json())
//       .then(json => {
//         console.log("json:", json);
//         dispatch(getCowsSuccess(json.cows));
//       })
//       .catch(err => dispatch(getCowsFailure(err)));
//   };
// }

export function getCows() {
  return {
    type: FETCHING_COWS
  };
}

export function getCowsSuccess(data) {
  return {
    type: FETCHING_COWS_SUCCESS,
    data
  };
}

export function getCowsFailure() {
  return {
    type: FETCHING_COWS_FAILURE
  };
}

// export const getCows = response => {
//   return {
//     type: FETCH_COWS,
//     payload: response
//   };
// };
