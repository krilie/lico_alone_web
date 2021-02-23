import React, {Component} from 'react';
import { GetCatchwordDataList} from "../../api/apiCommon";
import {checkResDataWithToast} from "../../api/apiBase";

class Catchword extends Component {
    state = {
        batch_size: 10,
        loading: false,
        data: []
    }

    componentDidMount() {
        const { batch_size,data} = this.state
        this.setState({loading:true})
        GetCatchwordDataList("", data.length, batch_size).then(res => {
            const dataGeted = checkResDataWithToast(res);
            if (dataGeted !== undefined && dataGeted.length > 0) {
                if (data.length === 0) {
                    this.setState({data: dataGeted})
                } else {
                    this.setState({data: [...this.state.data, ...dataGeted]})
                }
            }
        }).finally(()=>{
            this.setState({loading:false})
        })
    }

    render() {
        const {data} = this.state
        return (
            <div>
                {data}
            </div>
        );
    }
}

export default Catchword;
