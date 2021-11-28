import * as type from './types';

export const getForecast = (payload) => ({
    type: type.GET_FORECAST,
    ...payload
})

export const successForecast = (payload) => ({
    type: type.FORECAST_SUCCESS,
    ...payload
})

export const failureForecast = (payload) => ({
    type: type.FORECAST_FAILURE,
    ...payload
})