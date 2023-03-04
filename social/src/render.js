import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, sendMessage } from './redux/state';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
      <React.StrictMode>
        <App state={state} addPost={addPost} sendMessage={sendMessage} />
      </React.StrictMode>
    );
}

export default rerenderEntireTree;