import { combineReducers } from 'redux';
import UserDetailsReducers from './UserDetailsReducers';
import CommentsReducers from './CommentsReducers';
import PhotosReducers from './PhotosReducers';
import TodosReducers from './TodosReducers';

export default combineReducers({
  user: UserDetailsReducers,
  comments: CommentsReducers,
  photos: PhotosReducers,
  todos: TodosReducers
});
