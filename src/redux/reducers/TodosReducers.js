import * as ActionTypes from '../Action/ActionTypes';

const INITIAL_STATE = {
  isLoading: true,
  errMess: null,
  todo: []
};

// todos reducers
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.TODO_DETAILS_ADD:
      //console.log(action.payload);
      return { ...state, isLoading: false, errMess: null, todo: action.payload };

    case ActionTypes.TODO_DETAILS_LOADING:
      //  console.log(action.payload);
      return { ...state, isLoading: true, errMess: null, todo: [] };

    case ActionTypes.TODO_DETAILS_LOADING_FAILED:
      // console.log(action.payload);
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
