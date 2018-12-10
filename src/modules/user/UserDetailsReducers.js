import * as ActionTypes from '../../constants/constants';

const INITIAL_STATE = {
  isLoading: true,
  errMess: null,
  user: []
};
// User Details Reducers
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.USER_DETAILS_ADD:
      //console.log(action.payload);
      return { ...state, isLoading: false, errMess: null, user: action.payload };

    case ActionTypes.USER_DETAILS_LOADING:
      //  console.log(action.payload);
      return { ...state, isLoading: true, errMess: null, user: [] };

    case ActionTypes.USER_DETAILS_LOADING_FAILED:
      // console.log(action.payload);
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
