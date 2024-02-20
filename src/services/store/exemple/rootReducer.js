import { combineReducers } from "redux";

import exampleReducer from "./reduce";

export default combineReducers({
    example: exampleReducer
})