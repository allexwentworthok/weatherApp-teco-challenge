import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";
import rootReducer from "./reducers/index";

const sagaMiddleware = createSagaMiddleware();

const store = compose(applyMiddleware(sagaMiddleware))(createStore)(rootReducer);
sagaMiddleware.run(rootSaga);

export default store;