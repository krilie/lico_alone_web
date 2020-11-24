import React, {Component} from 'react';
import ArticlePage from "../article/ArticlePage";
import AppVersion from "../../components/AppVersion";
import SlidePictures from "../picture/SlidePictures";

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column is-two-thirds">
                        <ArticlePage/>
                    </div>
                    <div className="column">
                        <AppVersion/>
                        <SlidePictures/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
