import React, {Component} from 'react';
import SlidePictures from "./SlidePictures";
import "./PictureHomePage.css"
import {GetCarouselPicData} from "../../api/apiCommon";
import {checkResDataWithToast} from "../../api/apiBase";

class PictureHomePage extends Component {

    constructor(props) {
        super(props);
        // id-message-url-is_on_show[true]
        this.state = {data: []};
    }

    componentDidMount() {
        this.loadCarouselData();
    }

    componentWillUnmount = () => {
        this.setState = (state, callback) => {
        };
    }

    loadCarouselData = () => {
        GetCarouselPicData().then(res => {
            const data = checkResDataWithToast(res);
            if (data !== undefined) {
                this.setState({
                    data: data
                })
            }
        })
    }

    render() {
        return (
            <div className="pic-home">
                <SlidePictures/>
            </div>
        );
    }
}

export default PictureHomePage;
