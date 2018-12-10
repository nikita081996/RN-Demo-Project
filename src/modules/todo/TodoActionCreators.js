import * as ActionTypes from '../../constants/constants';

//todo fetching

export const fetchTodo = () => dispatch => {
  dispatch(todosLoading());
  return fetch(`${ActionTypes.TODO_FETCH_URL}`)
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
