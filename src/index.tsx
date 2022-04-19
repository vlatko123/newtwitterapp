import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {ContextsConstructor} from './context/Contexts';
import {TweetsContextsConstructor} from './context/TweetsContext';
import {AuthContextsConstructor} from './context/AuthContext';
import {ModalContextsConstructor} from './context/ModalContext';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
