import React, {Component} from 'react';
import {GetCatchwordDataList} from "../../api/apiCommon";
import {checkResDataWithToast} from "../../api/apiBase";
import "./Catchword.css"

class Catchword extends Component {
    constructor(props:any) {
        super(props);
        this.state = {
            batch_size: 10,
            loading: false,
            data: []
        }
    }


    componentDidMount() {
        this.loadMoreData();
    }

    loadMoreData() {
        let {batch_size, data}: Readonly<any> = this.state
        this.setState({loading: true})
        GetCatchwordDataList("", data.length, batch_size).then(res => {
            const dataGeted = checkResDataWithToast(res);
            if (dataGeted !== undefined && dataGeted.length > 0) {
                this.setState({data: [...data, ...dataGeted]})
            }
        }).finally(() => {
            this.setState({loading: false})
        })
    }

    render() {
        const {data, loading}: Readonly<any> = this.state
        if (loading) return <div>loading...</div>

        const catchwordView = data.map((v:any) => {
            const createData = new Date(v.created_at)
            const createDateShow = createData.getFullYear() + '年 ' + (createData.getMonth()+1) + '月' + createData.getDate() + '日'
            return (
                <div className="catchword-item">
                    <div style={{fontWeight: 500}}>{createDateShow}</div>
                    <div style={{fontWeight: 900, fontSize: 20}}>{v.title} {v.content}</div>
                </div>
            )
        })

        return (
            <div className="catchword-view">
                <div>热词</div>
                {catchwordView}
                <button style={{width: "100px"}}
                        className="btn btn--load-more"
                        onClick={() => {
                            this.loadMoreData()
                        }}>
                    更多
                </button>
            </div>
        );
    }
}

export default Catchword;
