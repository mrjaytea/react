import * as ActionTypes from './ActionTypes';

export const Grammar = (state = {isLoading: true, errMess: null, grammar: []}, action) => {
    switch(action.type) {
        case ActionTypes.GRAMMAR_LOADING:
            return {...state, isLoading: true, errMess: null, grammar: []};
        case ActionTypes.GRAMMAR_FAILED:
            return {...state, isLoading: false, errMess: action.payload, grammar: []};
        case ActionTypes.ADD_GRAMMAR:
            return {...state, isLoading: false, errMess: null, grammar: action.payload};
        default:
            return state;
    }
}