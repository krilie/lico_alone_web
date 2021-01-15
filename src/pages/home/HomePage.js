import React, {Component} from 'react';
import ArticlePage from "../article/ArticlePage";
import AppVersion from "../../components/AppVersion";
import SlidePictures from "../picture/SlidePictures";
import "./HomePage.css"

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="home-page">
                    <div className="article">
                        <ArticlePage/>
                    </div>
                    <div className="slider">
                        <AppVersion/>
                        <SlidePictures/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
