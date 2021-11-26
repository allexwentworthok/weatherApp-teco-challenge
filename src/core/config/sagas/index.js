import { all  } from 'redux-saga/effects';
import weather from  './weatherSaga';
import forecast from './forecastSaga';

export default function* rootSaga() {
    yield all([
        weather(),
        forecast()
    ]);
}