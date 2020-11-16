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
        this.state = {
            pathname: `${this.props.location.pathname}`,
            menuDrownClass: {
                isActive: false,
                menu: "navbar-menu", // is-active
                burger: "navbar-burger burger",
            }
        }
    }

    onClickMenuBurger = () => {
        const {menuDrownClass} = this.state
        if (menuDrownClass.isActive === true) {
            this.setState({
                menuDrownClass: {
                    isActive: false,
                    menu: "navbar-menu", // is-active
                    burger: "navbar-burger burger",
                }
            })
        } else {
            this.setState({
                menuDrownClass: {
                    isActive: true,
                    menu: "navbar-menu is-active", // is-active
                    burger: "navbar-burger burger is-active",
                }
            })
        }
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

    buildMenu = (selected, menuPath, menuName) => {
        const hrefName = `#${menuPath}`
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
        const menuView = (<nav className="navbar menu-view" role="navigation" aria-label="main navigation">
                <div className="navbar-brand ">
                    <a className="navbar-item menu-item-view menu-logo" href="/">麦田听蝉</a>
                    <div onClick={e => this.onClickMenuBurger()} role="button" className={menuDrownClass.burger}
                         aria-label="menu" aria-expanded="false"
                         data-target="my-navbar-menu">
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </div>
                </div>

                <div id="my-navbar-menu" className={menuDrownClass.menu}>
                    <div className="navbar-start">
                        <div className="navbar-item">{homeMenu}</div>
                        <div className="navbar-item">{articleMenu}</div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item"><a rel="noreferrer" href="#/about">关于</a></div>
                        <div className="navbar-item">
                            <a target="_blank" rel="noreferrer" href="https://manage-app.lizo.top">M</a>
                        </div>
                    </div>
                </div>
            </nav>
        )

        return (
            <div className="viewer">
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
        );
    }
}

export default App;
