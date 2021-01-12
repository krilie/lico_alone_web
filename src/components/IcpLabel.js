import React from "react";
import "./Icplable.css"
import {getIcpInfo} from "../api/apiCommon";
import {checkResDataWithToast} from "../api/apiBase";

export default class IcpLabel extends React.Component {

    state = {
        name: "", link: "", label: "",
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
        const {name, link, label} = this.state;
        return (
            <a className="icpLabelDiv"
               title={label}
               href={link}
               target="_blank"
               rel="noopener noreferrer">{name}</a>
        );
    }
}
