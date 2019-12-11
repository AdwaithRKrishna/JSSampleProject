import React from "react";
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";
import { createStore, applyMiddleware } from "redux";
import "./App.css";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/middleware';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
