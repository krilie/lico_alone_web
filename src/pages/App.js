import './App.css';
import 'bulma/css/bulma.css'
import React from "react";
import WebFooter from "../components/WebFooter";
import HomePage from "./home/HomePage";
import ArticlePage from "./article/ArticlePage";
import {checkResDataWithToast, postVisited} from "../api/apiCommon";
import {GetCustomerTraceId} from "../tools/localStorageUtil";
import {Route, Switch} from "react-router-dom";
import AboutPage from "./about/AboutPage";

class App extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {pathname: `${this.props.location.pathname}`}
    }

    componentDidMount() {
        process.nextTick(() => {
            console.log(this.props)
            if (this.state.pathname === "/")
                this.props.history.push(`/home`);
            else
                this.props.history.push(`${this.state.pathname}`);
            postVisited(GetCustomerTraceId()).then(checkResDataWithToast)
        })

    }

    render() {
        const menuView = <nav style={{margin: "5px"}} className="menu-view level is-mobile">
            <div className="level-left">
                <p className="level-item">
                    <a className="menu-logo" href="#/home">麦田听蝉</a>
                </p>
                <p className="level-item">
                    <a href="#/home">主页</a>
                </p>
                <p className="level-item">
                    <a href="#/article">文档</a>
                </p>
            </div>
            <div className="level-right">
                <div className="level-item">
                    <a rel="noreferrer" href="#/about">关于</a>
                </div>
                <div className="level-item">
                    <a target="_blank" rel="noreferrer" href="https://manage-app.lizo.top">M</a>
                </div>
            </div>
        </nav>


        return (
            <div className="viewer">
                <div className="container">
                    {menuView}
                    <div className="content-viewer">
                        <Switch>
                            <Route path={`/home`} component={HomePage}/>
                            <Route path={`/article`} component={ArticlePage}/>
                            <Route path={`/about`} component={AboutPage}/>
                        </Switch>
                    </div>
                    <WebFooter/>
                </div>
            </div>
        );
    }
}

export default App;
