import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

const render = Component => {
    ReactDOM.render(
        <Component/>,
        document.getElementById('app'),
    );
};

render(App);
