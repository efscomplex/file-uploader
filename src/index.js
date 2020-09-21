import React from 'react';
import ReactDOM from 'react-dom';
import { setup } from 'goober'
import App from './App';
import './styles/index.sass'
import * as serviceWorker from './serviceWorker';

setup(React.createElement)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
serviceWorker.unregister();
