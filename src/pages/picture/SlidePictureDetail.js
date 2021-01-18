import React, {Component} from 'react';
import './SlidePictureDetail.css'
import {withRouter} from "react-router-dom";
import GoBackToolBar from "../../components/GoBackToolBar";
import {checkResDataWithToast, imageProxied} from "../../api/apiBase";
import {GetCarouselPicById} from "../../api/apiCommon";

class SlidePictureDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            picId: "",
            message: "",
            url: ""
        }
    }

    componentDidMount() {
        console.log(this.props)
        console.log(this.state)
        const {picId} = this.props.match.params
        GetCarouselPicById(picId).then(res => {
            const data = checkResDataWithToast(res);
            if (data !== undefined) {
                this.setState({
                    picId: data.picId,
                    message: data.message,
                    url: data.url
                })
            }
        })
    }

    render() {
        const {url, message, picId} = this.state
        let content = <div>loading...</div>
        if (url !== "") {
            content = (
                <div>
                    <div><strong>id:{picId}</strong></div>
                    <img title="点击返回" onClick={e => this.props.history.goBack()} className="slide-image-img"
                         src={imageProxied(url, "1000x800,fit")} alt={"img"}/>
                    <div className="slide-image-message">{message}</div>
                </div>
            );
        }
        return (
            <div className="pic-view">
                <GoBackToolBar history={this.props.history}/>
                {content}
            </div>
        );
    }
}

export default withRouter(SlidePictureDetail);
