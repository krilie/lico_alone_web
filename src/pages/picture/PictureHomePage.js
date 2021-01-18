import React, {Component} from 'react';
import "./PictureHomePage.css"
import {GetCarouselPicData} from "../../api/apiCommon";
import {checkResDataWithToast, imageProxied} from "../../api/apiBase";
import {Link} from "react-router-dom";

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
        const picViews = data.map(val => {
                return <div key={val.id} className="pic-item">
                    <Link to={`/picture/${val.id}`} target="_parent">
                        <img className="pic-item-pic" src={imageProxied(val.url, "800x600,fit")} alt={"img"}/>
                        <div className="pic-item-msg">{val.message}</div>
                    </Link>
                </div>
            }
        );
        return (
            <div className="pic-home">
                {picViews}
            </div>
        );
    }
}

export default PictureHomePage;
