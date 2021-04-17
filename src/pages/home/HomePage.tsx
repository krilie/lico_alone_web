import React, {Component} from 'react';
import ArticlePage from "../article/ArticlePage";
import AppVersion from "../../components/AppVersion";
import SlidePictures from "../picture/SlidePictures";
import "./HomePage.css"
import Catchword from "../catchword/Catchword";

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="home-page">
                    <div className="article">
                        <ArticlePage/>
                    </div>
                    <div className="slider">
                        <Catchword/>
                    </div>
                    <div className="slider2">
                        <AppVersion/>
                        <SlidePictures/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
