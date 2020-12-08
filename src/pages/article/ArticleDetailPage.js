import React, {Component} from 'react';
import {checkResDataWithToast, getArticleById} from "../../api/apiCommon";
import GoBackToolBar from "../../components/GoBackToolBar";
import "./ArticleDetailPage.css"
import "./ArticleDetailPageContentView.css"
import {FiThumbsUp, FiThumbsDown} from "react-icons/fi";

class ArticleDetailPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            article: {},
            loading: true,
            articleId: this.props.match.params.articleId
        }
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
        };
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        const {articleId} = this.state
        getArticleById(articleId).then(res => {
            const data = checkResDataWithToast(res);
            if (data !== undefined) {
                this.setState({
                    article: data,
                    loading: false,
                })
            }
        }).finally(() => {
            this.setState({
                loading: false
            })
        })
    }

    render() {
        const {article, loading} = this.state
        const thumbsUpView = article.has_like ?
            <div className="thumbs-has-view">
                <FiThumbsUp size={30}/>
                <div style={{textAlign: "center"}}>{article.like}</div>
            </div>
            :
            <div className="thumbs-no-has-view">
                <FiThumbsUp size={30}/>
                <div style={{textAlign: "center"}}>{article.like}</div>
            </div>
        const thumbsDownView = article.has_dislike ?
            <div className="thumbs-has-view">
                <FiThumbsDown size={30}/>
                <div style={{textAlign: "center"}}>{article.like}</div>
            </div>
            :
            <div className="thumbs-no-has-view">
                <FiThumbsDown size={30}/>
                <div style={{textAlign: "center"}}>{article.like}</div>
            </div>

        const articleView = loading === false ?
            <div className="article-view">
                <div id="articleView" className="article-view-content ck-content"
                     dangerouslySetInnerHTML={{__html: article.content}}/>
                <div className="article-view-thumbs-view">
                    {thumbsUpView}
                    {thumbsDownView}
                </div>
            </div>
            :
            <div className="article-view-loading">loading...</div>
        return <div>
            <GoBackToolBar history={this.props.history}/>
            {articleView}
        </div>
    }
}

export default ArticleDetailPage;
