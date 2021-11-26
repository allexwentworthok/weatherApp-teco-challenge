import * as types from '../actions/types';

const initialState = {
    weatherState: [],
    error: null,
    loading: true
};

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_WEATHER:
            return { ...state, weatherState: [], error: null, loading: true };
        case types.WEATHER_SUCCESS:
            return { ...state, weatherState: action.payload, error: null, loading: false };
        case types.WEATHER_FAILURE:
            return { ...state, weatherState: [], error: action.payload, loading: true };
        default:
            return state;
    }
}