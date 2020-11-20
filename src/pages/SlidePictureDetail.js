import React, {Component} from 'react';
import {hexToString} from "../tools/strUtil";
import {imageProxied} from "../api/apiCommon";

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
        const {url, message, picId} = this.props
        return (
            <div className="pic-view">
                <strong>{picId}</strong>
                <img className="slide-image-img" src={imageProxied(url, "1000x800,fit")} alt={"img"}/>
                <div className="slide-image-message">
                    {message}
                </div>
            </div>
        );
    }
}

export default SlidePictureDetail;
