import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
      </Provider>
    </BrowserRouter>
);