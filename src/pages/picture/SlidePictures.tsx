import React from "react";
import "./SlidePictures.css"
import {GetCarouselPicData} from "../../api/apiCommon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {Link} from "react-router-dom";
import {checkResDataWithToast, imageProxied} from "../../api/apiBase";

class SlidePictures extends React.Component {
    constructor(props: any) {
        super(props);
        // id: "2b995ee9-f2e8-4dfc-b997-748b79f247a3"
        // created_at: "2020-06-20T15:26:07+08:00"
        // updated_at: "2020-06-20T15:26:07+08:00"
        // deleted_at: null
        // message: "顯示的"
        // url: "http://oss.lizo.top/static/1273910222259228672b7a47c273de0783708ea5eb52b42c35d.jpg"
        // is_on_show: true
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
        const {data}: Readonly<any> = this.state
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: true,
            initialSlide: 2,
            autoplay: false,
            autoplaySpeed: 3000,
            cssEase: "linear",
            pauseOnHover: true,
            focusOnSelect: true,
        };
        const slideImages = data.map((val: any) => {
            return (
                <li key={val.id} className="slide-image-item">
                    <Link to={`/picture/${val.id}`} target="_parent">
                        <img className="slide-image-img" src={imageProxied(val.url, "400x300,fit")} alt={"img"}/>
                        <div className="slide-image-message">{val.message}</div>
                    </Link>
                </li>
            )
        });

        // @ts-ignore
        const slider = <Slider {...settings}>
            {slideImages}
        </Slider>;
        return <div className="slide-image-viewer">
            {slider}
        </div>
    }
}


export default SlidePictures;
