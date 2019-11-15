import * as ActionTypes from './ActionTypes';

export const About = (state = {isLoading: true, errMess: null, about: []}, action) => {
    switch(action.type) {
        case ActionTypes.ABOUT_LOADING:
            return {...state, isLoading: true, errMess: null, about: []};
        case ActionTypes.ABOUT_FAILED:
            return {...state, isLoading: false, errMess: action.payload, about: []};
        case ActionTypes.ADD_ABOUT:
            return {...state, isLoading: false, errMess: null, about: action.payload};
        default:
            return state;
    }
}