import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from "./pages/home/App";
import {HashRouter, Route} from 'react-router-dom'
import store from "./redux/RuduxIndex";

ReactDOM.render((
    <Provider store={store}>
        <HashRouter basename='/'>
            <Route path={`/`} component={App}/>
        </HashRouter>
    </Provider>
), document.getElementById('root'));
