import * as ActionTypes from '../Action/ActionTypes';

const INITIAL_STATE = {
  isLoading: true,
  errMess: null,
  comment: []
};

// comment reducers
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.COMMENT_DETAILS_ADD:
      //console.log(action.payload);
      return { ...state, isLoading: false, errMess: null, comment: action.payload };

    case ActionTypes.COMMENT_DETAILS_LOADING:
      //  console.log(action.payload);
      return { ...state, isLoading: true, errMess: null, comment: [] };

    case ActionTypes.COMMENT_DETAILS_LOADING_FAILED:
      // console.log(action.payload);
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
