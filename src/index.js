import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './views/Main';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './state';
import reducer, { INITIAL_STATE } from './state/reducers';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={INITIAL_STATE} reducer={reducer}>
        <Main />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
