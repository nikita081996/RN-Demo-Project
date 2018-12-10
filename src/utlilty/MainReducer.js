import { combineReducers } from 'redux';
import UserDetailsReducers from '../modules/user/UserDetailsReducers';
import CommentsReducers from '../modules/comments/CommentsReducers';
import PhotosReducers from '../modules/photos/PhotosReducers';
import TodosReducers from '../modules/todo/TodosReducers';

export default combineReducers({
  user: UserDetailsReducers,
  comments: CommentsReducers,
  photos: PhotosReducers,
  todos: TodosReducers
});
