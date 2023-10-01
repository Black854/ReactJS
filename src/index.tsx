import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom/dist';
import { Provider } from 'react-redux/es';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
      </Provider>
    </BrowserRouter>
);