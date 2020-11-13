import './App.css';
import 'bulma/css/bulma.css'
import React from "react";
import WebFooter from "../components/WebFooter";
import HomePage from "./home/HomePage";
import ArticlePage from "./article/ArticlePage";
import {checkResDataWithToast, postVisited} from "../api/apiCommon";
import {GetCustomerTraceId} from "../tools/localStorageUtil";
import {Route, Switch} from "react-router-dom";

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
        return (
            <div className="viewer">
                <div className="container">
                    <div>the menu</div>
                    <div className="content-viewer">
                        <Switch>
                            <Route path={`/home`} component={HomePage}/>
                            <Route path={`/article`} component={ArticlePage}/>
                        </Switch>
                    </div>
                </div>

                <WebFooter/>
            </div>
        );
    }
}

export default App;
