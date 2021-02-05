import { combineReducers } from "redux";

const initialState = {
    frutas: []
}

function reducer(state = initialState, action) {
    if (action.type === "ADICIONAR") {
        return { frutas: [ ...state.frutas, {...action.value}]}

    }
    else {
        return state;
    }
}

function tituloReducer(state= { titulo: "Feira" }, action) {
    if(action.type === "ALTERAR"){
        return { titulo: action.value };
    }
    else {
        return state;
    }
}

const reducers = combineReducers( {reducer, tituloReducer});

export default reducers;