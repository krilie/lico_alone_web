
import './App.css';
import 'bulma/css/bulma.css'
import React from "react";
import {getIcpInfo} from "./api/ApiCommon";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            icpInfo:{}
        }
    }

    componentDidMount() {
        getIcpInfo().then(res=>{
            this.setState({
                icpInfo:res.data.data
            })
        })
    }

    render() {
        let {icpInfo} = this.state;
        if (icpInfo === {})
            icpInfo = ""
        else
            icpInfo = icpInfo.link
        return (
            <div className="viewer">
                <div className="columns">
                    <div className="column">
                        {icpInfo}
                    </div>
                    <div className="column">
                        Second column
                    </div>
                    <div className="column">
                        Third column
                    </div>
                    <div className="column">
                        Fourth column
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
