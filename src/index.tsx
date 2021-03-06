import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import {ContextsConstructor} from '../src/context/Contexts';
import {TweetsContextsConstructor} from './context/TweetsContext';
import {AuthContextsConstructor} from './context/AuthContext';
import {ModalContextsConstructor} from './context/ModalContext';

ReactDOM.render(
  <React.StrictMode>
    <ModalContextsConstructor>
      <AuthContextsConstructor>
        <BrowserRouter>
          <ContextsConstructor>
            <TweetsContextsConstructor>
              <App />
            </TweetsContextsConstructor>
          </ContextsConstructor>
        </BrowserRouter>
      </AuthContextsConstructor>
    </ModalContextsConstructor>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
