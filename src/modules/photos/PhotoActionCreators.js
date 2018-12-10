import * as ActionTypes from '../../constants/constants';

//Photos Fetching

export const fetchPhoto = () => dispatch => {
  dispatch(photoLoading());
  return fetch(`${ActionTypes.PHOTO_FETCH_URL}`)
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

// photo fetching failed
export const photoFetchingFailed = errorMessage => ({
  type: ActionTypes.PHOTO_DETAILS_LOADING_FAILED,
  payload: errorMessage
});

// photo fetching done
export const addPhoto = photo => ({
  type: ActionTypes.PHOTO_DETAILS_ADD,
  payload: photo
});

// photo loading
export const photoLoading = () => ({
  type: ActionTypes.PHOTO_DETAILS_LOADING,
  payload: null
});
