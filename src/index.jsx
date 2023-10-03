import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom/dist';
import { Provider } from 'react-redux/es';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App store={store} />
      </Provider>
    </BrowserRouter>
);