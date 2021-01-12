import React, {Component} from 'react';
import {hexToString} from "../../tools/strUtil";
import './SlidePictureDetail.css'
import {withRouter} from "react-router-dom";
import GoBackToolBar from "../../components/GoBackToolBar";
import {imageProxied} from "../../api/apiBase";

class SlidePictureDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            picId: this.props.match.params.picId,
            message: hexToString(this.props.match.params.hexMessage),
            url: hexToString(this.props.match.params.hexPicUrl)
        }
    }

    render() {
        const {url, message, picId} = this.state
        return (
            <div className="pic-view">
                <GoBackToolBar history={this.props.history}/>
                <div>
                    <strong>id:{picId}</strong>
                </div>
                <img title="点击返回" onClick={e=>this.props.history.goBack()}  className="slide-image-img" src={imageProxied(url, "1000x800,fit")} alt={"img"}/>
                <div className="slide-image-message">
                    {message}
                </div>
            </div>
        );
    }
}

export default withRouter(SlidePictureDetail);
