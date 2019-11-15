import * as ActionTypes from './ActionTypes';

export const Skills = (state = {isLoading: true, errMess: null, skills: []}, action) => {
    switch(action.type) {
        case ActionTypes.SKILLS_LOADING:
            return {...state, isLoading: true, errMess: null, skills: []};
        case ActionTypes.SKILLS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, skills: []};
        case ActionTypes.ADD_SKILLS:
            return {...state, isLoading: false, errMess: null, skills: action.payload};
        default:
            return state;
    }
}