import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { ConfirmContextProvider } from "./utils/ConfirmContexProvider";
import ConfirmModal from './components/ConfirmModal';

ReactDOM.render(
  <React.StrictMode>
    <ConfirmContextProvider>
      <App />
      <ConfirmModal />
    </ConfirmContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorkerRegistration.register();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
