import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import persistConfig from "./persistConfig";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
    auth: authReducer,

    // other reducers
});

export default persistReducer(persistConfig, rootReducer);
