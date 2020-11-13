import './App.css';
import 'bulma/css/bulma.css'
import React from "react";
import WebFooter from "../components/WebFooter";
import HomePage from "./home/HomePage";
import ArticlePage from "./article/ArticlePage";
import {checkResDataWithToast, postVisited} from "../api/ApiCommon";
import {GetCustomerTraceId} from "../tools/LocalStorageUtil";
import {Redirect, Route, Switch} from "react-router-dom";

class App extends React.Component {

    componentDidMount() {
        process.nextTick(() => {
            postVisited(GetCustomerTraceId()).then(checkResDataWithToast)
        })
    }

    render() {
        return (
            <div className="viewer">
                <div className="container">
                    the menu
                </div>
                <Switch>
                    <Route path={`/home`} component={HomePage}/>
                    <Route path={`/article`} component={ArticlePage}/>
                    <Redirect path={`/`} to={{pathname: `/home`}}/>
                </Switch>
                <WebFooter/>
            </div>
        );
    }
}

export default App;
