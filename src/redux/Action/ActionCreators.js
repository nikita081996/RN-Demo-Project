import * as ActionTypes from './ActionTypes';
import { userFetchUrl, photoFetchUrl, commentFetchUrl, todoFetchUrl } from '../Url/baseUrl';

//user fetching
export const fetchUser = () => dispatch => {
  dispatch(userLoading());
  return fetch(`${userFetchUrl}`)
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

//Photos Fetching

export const fetchPhoto = () => dispatch => {
  dispatch(photoLoading());
  return fetch(`${photoFetchUrl}`)
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
    .then(photo => dispatch(addPhoto(photo)))
    .catch(error => dispatch(photoFetchingFailed(error)));
};
export const photoFetchingFailed = errorMessage => ({
  type: ActionTypes.PHOTO_DETAILS_LOADING_FAILED,
  payload: errorMessage
});

export const addPhoto = photo => ({
  type: ActionTypes.PHOTO_DETAILS_ADD,
  payload: photo
});

export const photoLoading = () => ({
  type: ActionTypes.PHOTO_DETAILS_LOADING,
  payload: null
});

//comments fetching

export const fetchComment = () => dispatch => {
  dispatch(commentsLoading());
  return fetch(`${commentFetchUrl}`)
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

//todo fetching

export const fetchTodo = () => dispatch => {
  dispatch(todosLoading());
  return fetch(`${todoFetchUrl}`)
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
    .then(todo => dispatch(addTodos(todo)))
    .catch(error => dispatch(todosFetchingFailed(error)));
};
export const todosFetchingFailed = errorMessage => ({
  type: ActionTypes.TODO_DETAILS_LOADING_FAILED,
  payload: errorMessage
});

export const addTodos = todo => ({
  type: ActionTypes.TODO_DETAILS_ADD,
  payload: todo
});

export const todosLoading = () => ({
  type: ActionTypes.TODO_DETAILS_LOADING,
  payload: null
});
