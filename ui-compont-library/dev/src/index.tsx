import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from '@hot-loader/react-dom';
import { hot } from 'react-hot-loader/root';
import Example from './Example';

ReactDOM.render(
    React.createElement(hot(Example)),
    document.getElementById('app')
);
