import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import {HashRouter, Route} from 'react-router-dom'
import SlidePictureDetail from "./pages/SlidePictureDetail";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter basename='/'>
            <Route path={`/`} component={App}/>
            <Route exact path={`/picture_detail/:picId/:hexPicUrl/:hexMessage`} component={SlidePictureDetail}/>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
