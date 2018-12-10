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

// todo data fetching failed
export const todosFetchingFailed = errorMessage => ({
  type: ActionTypes.TODO_DETAILS_LOADING_FAILED,
  payload: errorMessage
});

// after todo data fetching done
export const addTodos = todo => ({
  type: ActionTypes.TODO_DETAILS_ADD,
  payload: todo
});

// while loading todo data
export const todosLoading = () => ({
  type: ActionTypes.TODO_DETAILS_LOADING,
  payload: null
});
