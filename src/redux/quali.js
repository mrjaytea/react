import * as ActionTypes from './ActionTypes';

export const Quali = (state = {isLoading: true, errMess: null, quali: []}, action) => {
    switch(action.type) {
        case ActionTypes.QUALI_LOADING:
            return {...state, isLoading: true, errMess: null, quali: []};
        case ActionTypes.QUALI_FAILED:
            return {...state, isLoading: false, errMess: action.payload, quali: []};
        case ActionTypes.ADD_QUALI:
            return {...state, isLoading: false, errMess: null, quali: action.payload};
        default:
            return state;
    }
}