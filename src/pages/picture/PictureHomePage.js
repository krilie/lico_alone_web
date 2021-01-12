import React, {Component} from 'react';
import "./PictureHomePage.css"
import {GetCarouselPicData} from "../../api/apiCommon";
import {checkResDataWithToast, imageProxied} from "../../api/apiBase";

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
                this.setState({data: data})
            }
        })
    }

    render() {
        const {data} = this.state;
        const picViews = data.map(p => <div className="pic-item"><img src={imageProxied(p.url, "800x600,fit")} alt={"img"}/></div>);
        return (
            <div className="pic-home">
                {picViews}
            </div>
        );
    }
}

export default PictureHomePage;
