import './App.css';
import 'bulma/css/bulma.css'
import React from "react";
import WebFooter from "../components/WebFooter";
import HomePage from "./home/HomePage";
import ArticlePage from "./article/ArticlePage";
import {postVisited} from "../api/apiCommon";
import {GetCustomerTraceId} from "../tools/localStorageUtil";
import {Route, Switch} from "react-router-dom";
import AboutPage from "./about/AboutPage";
import ArticleDetailPage from "./article/ArticleDetailPage";
import SlidePictureDetail from "./picture/SlidePictureDetail";
import PictureHomePage from "./picture/PictureHomePage";
import {checkResDataWithToast} from "../api/apiBase";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pathname: `${this.props.location.pathname}`
        }
    }

    componentDidMount() {
        process.nextTick(() => {
            if (this.state.pathname === "/")
                this.props.history.push(`/home`);
            postVisited(GetCustomerTraceId()).then(checkResDataWithToast)
        })

    }

    buildMenu = (selected, menuPath, menuName) => {
        const hrefName = `${menuPath}`
        return selected === menuPath ?
            <a className="menu-item-view selected" href={hrefName}>{menuName}</a>
            :
            <a className="menu-item-view" href={hrefName}>{menuName}</a>
            ;
    }

    render() {
        const {menuDrownClass} = this.state
        const pathname = this.props.location.pathname
        const homeMenu = this.buildMenu(pathname, "/home", "主页")
        const articleMenu = this.buildMenu(pathname, "/article", "文档")
        const pictureMenu = this.buildMenu(pathname,"/picture","图片")
        const menuView = (<nav className="navbar menu-view" role="navigation" aria-label="main navigation">
                <div className="navbar-brand ">
                    <a className="navbar-item menu-item-view menu-logo" href="/">麦田听蝉</a>
                </div>
                <div id="my-navbar-menu" className={menuDrownClass.menu}>
                    <div className="navbar-start">
                        <div className="navbar-item">{homeMenu}</div>
                        <div className="navbar-item">{articleMenu}</div>
                        <div className="navbar-item">{pictureMenu}</div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item"><a rel="noreferrer" href="/about">关于</a></div>
                        <div className="navbar-item">
                            <a target="_blank" rel="noreferrer" href="https://manage-app.lizo.top">M</a>
                        </div>
                    </div>
                </div>
            </nav>
        )

        return (
            <div className="app">
                <div className="menu">
                    {menuView}
                </div>
                <div className="content">
                    <Switch>
                        <Route path={`/home`} component={HomePage}/>
                        <Route exact path={`/article`} component={ArticlePage}/>
                        <Route path={`/article/:articleId`} component={ArticleDetailPage}/>
                        <Route exact path={`/picture`} component={PictureHomePage}/>
                        <Route exact path={`/picture/:picId/:hexPicUrl/:hexMessage`}
                               component={SlidePictureDetail}/>
                        <Route path={`/about`} component={AboutPage}/>
                    </Switch>
                </div>
                <div className="footer">
                    <WebFooter/>
                </div>
            </div>
        );
    }
}

export default App;
