import * as type from './types';

export const getWeather = (payload) => ({
    type: type.GET_WEATHER,
    ...payload
});

export const successWeather = (payload) => ({
    type: type.WEATHER_SUCCESS,
    ...payload
});

export const failureWeather = (payload) => ({
    type: type.WEATHER_FAILURE,
    ...payload
});
