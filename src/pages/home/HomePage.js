import React, {Component} from 'react';
import ArticlePage from "../article/ArticlePage";
import AppVersion from "../../components/AppVersion";

class HomePage extends Component {
    render() {
        return (
            <div>
                <ArticlePage/>
                <AppVersion/>
            </div>
        );
    }
}

export default HomePage;