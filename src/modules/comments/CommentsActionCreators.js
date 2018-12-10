import * as ActionTypes from '../../constants/constants';

//comments fetching

export const fetchComment = () => dispatch => {
  dispatch(commentsLoading());
  return fetch(`${ActionTypes.COMMENT_FETCH_URL}`)
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
    .then(comment => dispatch(addComments(comment)))
    .catch(error => dispatch(commentsFetchingFailed(error)));
};
export const commentsFetchingFailed = errorMessage => ({
  type: ActionTypes.COMMENT_DETAILS_LOADING_FAILED,
  payload: errorMessage
});

export const addComments = comment => ({
  type: ActionTypes.COMMENT_DETAILS_ADD,
  payload: comment
});

export const commentsLoading = () => ({
  type: ActionTypes.COMMENT_DETAILS_LOADING,
  payload: null
});
