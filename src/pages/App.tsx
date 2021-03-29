import './App.css';
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
import Catchword from "./catchword/Catchword";

class App extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = {
            // @ts-ignore
            pathname: `${this.props.location.pathname}`
        }
    }

    componentDidMount() {
        process.nextTick(() => {
            // @ts-ignore
            if (this.state.pathname === "/")
                // @ts-ignore
                this.props.history.push(`/home`);
            postVisited(GetCustomerTraceId()).then(checkResDataWithToast)
        })

    }

    buildMenu = (selected: string, menuPath: string, menuName: string) => {
        const hrefName = `${menuPath}`
        if (selected === menuPath) {
            return <a style={{color: "#fc8a8a"}} className="menu-item" href={hrefName}>{menuName}</a>
        } else {
            return <a className="menu-item" href={hrefName}>{menuName}</a>
        }
    }

    render() {
        // @ts-ignore
        const pathname = this.props.location.pathname
        const homeMenu = this.buildMenu(pathname, "/home", "主页")
        const articleMenu = this.buildMenu(pathname, "/article", "文档")
        const pictureMenu = this.buildMenu(pathname, "/picture", "图片")
        const catchwordMenu = this.buildMenu(pathname, "/catchword", "流行")
        const aboutMenu = this.buildMenu(pathname, "/about", "关于")
        return (
            <div className="app">
                <div className="menu">
                    <a style={{}} className="menu-item" href="/">麦田听蝉</a>
                    {homeMenu}
                    {articleMenu}
                    {pictureMenu}
                    {catchwordMenu}
                    <div style={{flexGrow: 2}}/>
                    {aboutMenu}
                    <a className="menu-item" target="_blank" rel="noreferrer" href="https://manage-app.lizo.top">M</a>
                </div>
                <div className="content">
                    <Switch>
                        <Route path={`/home`} component={HomePage}/>
                        <Route exact path={`/article`} component={ArticlePage}/>
                        <Route path={`/article/:articleId`} component={ArticleDetailPage}/>
                        <Route exact path={`/picture`} component={PictureHomePage}/>
                        <Route exact path={`/picture/:picId`} component={SlidePictureDetail}/>
                        <Route exact path={`/catchword`} component={Catchword}/>
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
