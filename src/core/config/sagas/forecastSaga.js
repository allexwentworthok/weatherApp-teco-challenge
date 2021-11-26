import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { ENV } from '../env';
import { GET_FORECAST, FORECAST_SUCCESS, FORECAST_FAILURE, WEATHER_SUCCESS } from '../actions/types';

getForecastFromApi = () => {
    return axios.get(`${ENV.URL_API}/forecast?lat=${lat}&lon=${long}&appid=${ENV.API_KEY}`)
        .then(response => {
            return response;
        }).catch(error => {
            throw error;
        });
}

function* forecastSaga({ coord }) {
    try {
        const { lat, long } = coord;
        const response = yield call(getForecastFromApi, lat, long);
        yield put({ type: FORECAST_SUCCESS, payload: response.data })
    }
    catch {
        yield put({ type: FORECAST_FAILURE })
    }
}

export default function* forecast() {
    yield takeLatest(GET_FORECAST, forecastSaga);
}