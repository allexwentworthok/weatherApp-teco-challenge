import { combineReducers } from "redux";
import forecastReducer from "./forecastReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
    weather: weatherReducer,
    forecast: forecastReducer
});

export default rootReducer;