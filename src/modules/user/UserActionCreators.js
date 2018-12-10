import * as ActionTypes from '../../constants/constants';

//user fetching
export const fetchUser = () => dispatch => {
  dispatch(userLoading());
  return fetch(`${ActionTypes.USER_FETCH_URL}`)
    .then(
      response => {
        if (response.ok) {
          return response;
        }
        const error = new Error(`Error : ${response.status} ${response.statusText}`);
        error.response = response;
        throw error;
      },
      error => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then(response => response.json())
    .then(user => dispatch(addUser(user)))
    .catch(error => dispatch(userFetchingFailed(error)));
};
export const userFetchingFailed = errorMessage => ({
  type: ActionTypes.USER_DETAILS_LOADING_FAILED,
  payload: errorMessage
});

export const addUser = user => ({
  type: ActionTypes.USER_DETAILS_ADD,
  payload: user
});

export const userLoading = () => ({
  type: ActionTypes.USER_DETAILS_LOADING,
  payload: null
});
