import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger)); // 여러개의 미들웨어를 적용 할 수 있습니다.);
//logger을 사용할 경우 logger가 가장 마지막에 와야함

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
       <App />
     </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
