import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import {HashRouter, Route} from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <HashRouter basename='/'>
            <Route path={`/`} component={App}/>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
