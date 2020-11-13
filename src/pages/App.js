import './App.css';
import 'bulma/css/bulma.css'
import React from "react";
import WebFooter from "../components/WebFooter";
import HomePage from "./home/HomePage";
import ArticlePage from "./article/ArticlePage";
import {checkResDataWithToast, postVisited} from "../api/apiCommon";
import {GetCustomerTraceId} from "../tools/localStorageUtil";
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
                    <div>the menu</div>
                    <Switch>
                        <Route path={`/home`} component={HomePage}/>
                        <Route path={`/article`} component={ArticlePage}/>
                        <Redirect path={`/`} to={{pathname: `/home`}}/>
                    </Switch>
                </div>

                <WebFooter/>
            </div>
        );
    }
}

export default App;
