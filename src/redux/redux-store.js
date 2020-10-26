import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messengerReducer from "./messenger-reducer";

let reducers = combineReducers({
    Profile: profileReducer,
    Messenger: messengerReducer

})

let store = createStore(reducers);

export default store;