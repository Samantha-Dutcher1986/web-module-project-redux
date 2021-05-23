import { ADD_FAVORITES, TOGGLE_FAVORITES, REMOVE_FAVORITES } from '../actions/movieActions';
import movies from './../data';

const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state = initialState, action) => {
    const movieData = movies;

    switch(action.type){
        case ADD_FAVORITES:
            return{
                favorites: [...state.favorites, ...movieData.filter(item => (action.payload === item.id))],
                displayFavorites: state.displayFavorites
            };

            case TOGGLE_FAVORITES:
                return{
                    favorites: [...state.favorites],
                    displayFavorites: !state.displayFavorites
                };

            case REMOVE_FAVORITES:
                return{
                    favorites: [...state.favorites.filter(item => (action.payload !== item.id))],
                    displayFavorites: state.displayFavorites
                };

                default:
                    return state;
    }
};

export default reducer;