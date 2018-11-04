import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import youtubeReducer from "./youtubeReducer";

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    youtube: youtubeReducer
//    other reducers ...
});

export default rootReducer;