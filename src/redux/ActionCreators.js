import * as ActionTypes from './ActionTypes';
import baseURL from '../baseURL';

// Fetch add load then failed

// ------------------ABOUT-------------------------
export const fetchAbout = () => (dispatch) => {
    dispatch(aboutLoading(true));

    return fetch(baseURL + 'about')
        .then((response) => {
            console.log("Hello "+ response);
            if(response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status +": " + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        // response json made available for the below and we call it about
        // once the about are obtained, push the about to the redux store
        .then(about => dispatch(addAbout(about)))
        // Catch what was thrown
        .catch(error => dispatch(aboutFailed(error.message)));
}

export const addAbout = (about) => ({
    type: ActionTypes.ADD_ABOUT,
    payload: about
});

export const aboutLoading = () => ({
    type: ActionTypes.ABOUT_LOADING,
});

export const aboutFailed = (errmess) => ({
    type: ActionTypes.ABOUT_FAILED,
    payload: errmess
});

// ------------------GRAMMAR-------------------------
export const fetchGramamr = () => (dispatch) => {
    dispatch(grammarLoading(true));

    return fetch(baseURL + 'grammar')
        .then((response) => {
            if(response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status +": " + response.statusText);
                error.response = response;
                throw error;
                
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(grammar => dispatch(addGrammar(grammar)))
        .catch(error => dispatch(grammarFailed(error.message)));
}

export const addGrammar = (grammar) => ({
    type: ActionTypes.ADD_GRAMMAR,
    payload: grammar
});

export const grammarLoading = () => ({
    type: ActionTypes.GRAMMAR_LOADING,
});

export const grammarFailed = (errmess) => ({
    type: ActionTypes.GRAMMAR_FAILED,
    payload: errmess
});

// ------------------QUALI-------------------------
export const fetchQuali = () => (dispatch) => {
    dispatch(qualiLoading(true));

    fetch(baseURL + "qualifications")
        .then((response) => {
            if(response.ok) {
                return response
            } else {
                var error = new Error("Error " + response.status + ": " + response.statusText);
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then((response) => response.json())
        .then((quali) => dispatch(addQuali(quali)))
        .catch((error) => dispatch(qualiFailed(error.message)));
}

export const addQuali = (quali) => ({
    type: ActionTypes.ADD_QUALI,
    payload: quali
});

export const qualiLoading = () => ({
    type: ActionTypes.QUALI_LOADING,
});

export const qualiFailed = (errmess) => ({
    type: ActionTypes.QUALI_FAILED,
    payload: errmess
});

// ------------------SKILLS-------------------------
export const fetchSkills = () => (dispatch) => {
    dispatch(skillsLoading(true));

    fetch(baseURL + "skills")
        .then((response) => {
            if(response.ok) {
                return response;
            } else {
                var error = new Error("Error: " + response.status + ": " + response.statusText);
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then((response) => response.json())
        .then(skills => dispatch(addSkills(skills)))
        .catch(error => dispatch(skillsFailed(error.message)));
}

export const addSkills  = (skills) => ({
    type: ActionTypes.ADD_SKILLS,
    payload: skills
});

export const skillsLoading = () => ({
    type: ActionTypes.SKILLS_LOADING
});

export const skillsFailed = (errmess) => ({
    type: ActionTypes.SKILLS_FAILED,
    payload: errmess
});
