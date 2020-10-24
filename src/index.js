import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App/App";
import * as serviceWorker from "./serviceWorker";
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import{Provider} from 'react-redux'
import thunk from 'redux-thunk'
import BurgerReducer from './redux/reducer/BurgerReducer';
import OrderReducer from './redux/reducer/OrderReducer'
import SignupLoginReducer from './redux/reducer/SignupLoginReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggerMiddleware = store =>{
  return next =>{
    return action =>{
      console.log("MyLoggerMiddleware : Dispatch ==> ",action);
      console.log("MyLoggerMiddleware : State BEFORE==> ", store.getState());
      const result = next(action);
      console.log("MyLoggerMiddleware : State AFTER==> ", store.getState());
      return result;
    }
  }
  
}

const reducers =combineReducers({
  BurgerReducer,
  OrderReducer,
  SignupLoginReducer
})

const middleWares=[loggerMiddleware, thunk]

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleWares)));

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
   <App />
 </BrowserRouter>
 </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
