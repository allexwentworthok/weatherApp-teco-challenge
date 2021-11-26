import * as types from '../actions/types';

const initialState = {
    forecastState: [],
    error: null,
    loading: true
}

export default function forecastReducer(state = initialState, action){
    switch (action.type) {
        case types.GET_FORECAST:
            return { ...state, forecastState: [], error: null, loading: true }
        case types.FORECAST_SUCCESS:
            return { ...state, forecastState: action.payload, error: null, loading: false }
        case types.FORECAST_FAILURE:
            return { ...state, forecastState: [], error: action.payload, loading: true }
        default:
            return state;
    }
}
