import React, {Component} from 'react';
import {getIcpInfo} from "../api/apiCommon";
import {checkResDataWithToast} from "../api/apiBase";

class WebFooter extends Component {

    state = {
        name: "", link: "", label: "", domain: ""
    }

    componentDidMount() {
        getIcpInfo().then(res => {
            let data = checkResDataWithToast(res)
            if (data) {
                this.setState({
                    ...data
                })
            }
        })
    }


    render() {
        return (
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem 1rem 1rem",
                backgroundColor: "transparent"
            }}>
                <div style={{color: "#1acaef"}}>© 2019-2021 {this.state.domain} 版权所有</div>
                <pre style={{backgroundColor: "transparent"}}>    </pre>
                <div className="icpLabelDiv">
                    <a style={{textDecoration: "none"}} title={this.state.label}
                       href={this.state.link}
                       target="_blank"
                       rel="noopener noreferrer">ICP证:&nbsp;&nbsp;{this.state.name}</a>
                </div>
            </div>
        );
    }
}

export default WebFooter;
