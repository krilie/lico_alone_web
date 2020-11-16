import React from "react";
import "./AppVersion.css"
import 'bulma/css/bulma.css'

import {getVersion} from "../api/apiCommon";
import CopyToBoard from "../tools/copyToBoard";

export default class AppVersion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {build_time: "", git_commit: "", go_version: "", version: ""}
    }

    // {
    //   "build_time":"2020-05-08 22:26:28",
    //   "git_commit":"a22dd43a7b8ed831a0908e0ea97aab1bbd9a3181",
    //   "go_version":"go version go1.14.2 linux/amd64",
    //   "version":"v2.2.3"
    //}
    componentDidMount() {
        getVersion().then(res => {
            this.setState({
                ...res.data
            })
        })
    }

    componentWillUnmount = () => {
        this.setState = (state, callback) => {
        };
    }

    copyText = (text) => {
        CopyToBoard(text)
    }

    render() {
        const {build_time, git_commit, go_version, version} = this.state;
        const buildTime = <div title={build_time}>构建时间:&nbsp;&nbsp;{build_time}</div>
        const gitCommit = <div title={"点击复制 " + git_commit} onClick={() => this.copyText(git_commit)}>
            散列值:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pointer-able">{git_commit}</span>
        </div>
        const goVersion = <div title={go_version}>Go版本:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{go_version}</div>
        const appVersion = <div title={version}>App版本:&nbsp;&nbsp;&nbsp;{version}</div>
        return (
            <div className="appVersion">
                <div>{buildTime}</div>
                <div>{appVersion}</div>
                <div>{gitCommit}</div>
                <div>{goVersion}</div>
            </div>
        );
    }
}