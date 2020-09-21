import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './App';

const root = document.getElementById('root');

if (root !== null) {
    ReactDOM.render(<App />, root);
}