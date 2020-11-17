import React from "react";
import "./ArticlePage.css"
import 'bulma/css/bulma.css'
import {checkResDataWithToast, getArticleSampleList} from "../../api/apiCommon";
import {ToastErr, ToastWarn} from "../../tools/toastNormal";
import {withRouter} from "react-router-dom";

/**
 * -----------------------search key----
 * -------------------------------------
 * ------------------------------------20
 */
class Article extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            nowPage: 1,
            pageSize: 20,
            articleList: [],
            moreButtonText: "加载更多...",
            searchKey: ""
        };
    }

    componentDidMount() {
        this.loadData(true)
    }

    componentWillUnmount = () => {
        this.setState = (state, callback) => {
        };
    }

    updateSearchKey = (searchKey) => {
        this.setState({
            searchKey: searchKey
        })
    }

    loadData = (reset) => {
        let {nowPage, articleList, pageSize, searchKey} = this.state
        if (reset === true) {
            nowPage = 0;
            articleList = []
        }
        this.setState({loading: true})

        getArticleSampleList(nowPage + 1, pageSize, searchKey)
            .then(res => {
                const data = checkResDataWithToast(res);
                if (data.data.length <= 0) {
                    ToastWarn("没有更多了")
                    this.setState({
                        moreButtonText: "到底了",
                        articleList: [...articleList, ...data.data],
                    })
                } else {
                    this.setState({
                        nowPage: nowPage + 1,
                        articleList: [...articleList, ...data.data],
                        loading: false,
                    })
                    if (data.data.length < pageSize) {
                        this.setState({moreButtonText: "到底了"})
                    }
                }
            })
            .catch(err => {
                ToastErr(err)
            })
            .finally(() => {
                this.setState({loading: false})
            })
    }

    // article sample list item
// |-----| title
// |-----| content
// |-----| content
    articleSampleItem = (article, index) => {
        return <div key={index} onClick={() => this.props.history.replace("/article/" + article.id)}
                    className="article-item-view">
            <div className="columns">
                <div className="column index">
                    #{index}
                </div>
                <div className="column">
                    <div>{article.title}</div>
                    <div>{article.description}</div>
                </div>
            </div>
            <div style={{marginTop: "2px"}}/>
        </div>
    }

    render() {
        const {loading, articleList, moreButtonText} = this.state;
        const loadMoreButton = <div className="load-more-button">
            <button className="button is-light" disabled={loading} onClick={this.loadData}>{moreButtonText}</button>
        </div>;
        let articleListView = articleList.map((article, index) => this.articleSampleItem(article, index))
        const searchButton = <div className="search-button">
            <input className="input" type="text" name="search_key"
                   onChange={event => this.updateSearchKey(event.target.value)}
                   onKeyUp={e => e.keyCode === 13 ? this.loadData(true) : null} // enter key
                   placeholder="输入关键字并按回车进行搜索"/>
            <div style={{marginTop: "10px"}}/>
        </div>
        const articleListViewOnShow = loading === true ? <div>loading</div> : articleListView;
        return (
            <div className="article-page-view">
                {searchButton}
                {articleListViewOnShow}
                {loadMoreButton}
            </div>
        );
    }

}

export default withRouter(Article)