import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import movieReducer from './movieReducer';

export const rootReducer = combineReducers({
    movie: movieReducer,
    favorites: favoritesReducer
});
