import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './app/store';
import { Provider } from 'react-redux';
import 'normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);