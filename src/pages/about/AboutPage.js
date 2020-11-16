import React, {Component} from 'react';
import {checkResDataWithToast, getAboutApp} from "../../api/apiCommon";

class AboutPage extends Component {

    state = {aboutApp: ""}

    componentDidMount() {
        getAboutApp().then(res => {
            const data = checkResDataWithToast(res);
            if (data !== undefined)
                this.setState({
                    aboutApp: data
                })
        })
    }

    render() {
        const {aboutApp} = this.state
        return (
            <div dangerouslySetInnerHTML={aboutApp} className="about-app-view"/>
        );
    }
}

export default AboutPage;