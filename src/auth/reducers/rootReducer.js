import {combineReducers} from 'redux';

//sessão
import {sessionReducer } from "redux-react-session";

const rootReducer = combineReducers ({
    session: sessionReducer
});

export default rootReducer;