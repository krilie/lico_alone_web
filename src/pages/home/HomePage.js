import React, {Component} from 'react';
import ArticlePage from "../article/ArticlePage";
import AppVersion from "../../components/AppVersion";

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
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;