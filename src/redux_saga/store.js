import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga"
import rootReducers from "./rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootSaga from "./saga";


let sagaMiddleware = createSagaMiddleware();

let store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

export default store;