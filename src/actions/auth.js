import * as Config from '../constant/endpoint_contant';
import * as types from '../constant/action_constant';
import callApi from "../utils/apiCaller";
import axios from 'axios';



export function login(userCredentials, history) {
  
  return dispatch => {
    dispatch({ type: types.START_PROCESSING });

    axios.post(`${Config.ADMIN_ENDPOINT}/signin`, userCredentials)
     .then(({data: user}) => {
      localStorage.setItem('user', JSON.stringify(user));

      history.push('/');

      dispatch({ type: types.LOG_IN_SUCCESS, user });
      dispatch({ type: types.FINISH_PROCESSING });
    })
    .catch(err => {
      dispatch({ type: types.LOG_IN_FAILURE, errors: err.response });
      dispatch({ type: types.FINISH_PROCESSING });
    });
  };
}

export function logout() {
  localStorage.removeItem('user');
  return {
    type: types.LOG_OUT,
  };
}

export function clearErrors() {
  return {
    type: types.CLEAR_ERRORS,
  };
}
