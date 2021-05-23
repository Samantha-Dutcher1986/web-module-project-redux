export const ADD_MOVIE = "ADD_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";

export const addMovie = (id) => {
    return {type:ADD_MOVIE, payload:id};
};

export const deleteMovie = (id)=> {
    return {type: DELETE_MOVIE, payload:id};
};

export const addFavorites = (id) => {
    return {type:ADD_FAVORITES, payload:id};
};

export const removeFavorites = (id) => {
    return {type:REMOVE_FAVORITES, payload:id};
};

export const toggleFavorites = () => {
    return {type:TOGGLE_FAVORITES};
};
