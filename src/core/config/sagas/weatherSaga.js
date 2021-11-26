import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { ENV } from '../env';
import { GET_WEATHER, WEATHER_SUCCESS, WEATHER_FAILURE } from '../actions/types';

getFromApi = (lat, long) => {
    return axios.get(`${ENV.URL_API}/weather?lat=${lat}&lon=${long}&appid=${ENV.API_KEY}`)
        .then(response => {
            return response;
        }).catch(error => {
            throw error;
        });
}

function* weatherSaga({ coord }) {
    try {
        const { lat, long } = coord;
        const response = yield call(getFromApi, lat, long);
        yield put({ type: WEATHER_SUCCESS, payload: response.data});
    }
    catch (error) {
        yield put({ type: WEATHER_FAILURE, payload: error });
    }
}

//Watchers
export default function* weather() {
    yield takeLatest(GET_WEATHER, weatherSaga);
}
