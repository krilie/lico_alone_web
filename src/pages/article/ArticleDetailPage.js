import React, {Component} from 'react';
import {
    disLikeArticleById,
    getArticleById,
    likeArticleById, removeDisLikeArticleById, removeLikeArticleById
} from "../../api/apiCommon";
import GoBackToolBar from "../../components/GoBackToolBar";
import "./ArticleDetailPage.css"
import "./ArticleDetailPageContentView.css"
import {FiThumbsUp, FiThumbsDown} from "react-icons/fi";
import {checkResDataWithToast} from "../../api/apiBase";

class ArticleDetailPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            article: {},
            loading: true,
            articleId: this.props.match.params.articleId,
        }
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
        };
    }

    componentDidMount() {
        this.loadArticle()
    }

    loadArticle = () => {
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

    like = (articleId) => {
        this.setState({
            loading: true
        })
        likeArticleById(articleId).then(res => checkIsSuccessWithToast(res)).finally(() => this.loadArticle())
    }
    disLike = (articleId) => {
        this.setState({
            loading: true
        })
        disLikeArticleById(articleId).then(res => checkIsSuccessWithToast(res)).finally(() => this.loadArticle())
    }
    removeLike = (articleId) => {
        this.setState({
            loading: true
        })
        removeLikeArticleById(articleId).then(res => checkIsSuccessWithToast(res)).finally(() => this.loadArticle())
    }
    removeDisLike = (articleId) => {
        this.setState({
            loading: true
        })
        removeDisLikeArticleById(articleId).then(res => checkIsSuccessWithToast(res)).finally(() => this.loadArticle())
    }

    render() {
        const {article, loading} = this.state
        const thumbsUpView = article.has_like ?
            <div onClick={e => this.removeLike(article.id)} className="thumbs-has-view">
                <FiThumbsUp size={30}/>
                <div style={{textAlign: "center"}}>{article.like}</div>
            </div>
            :
            <div onClick={e => this.like(article.id)} className="thumbs-no-has-view">
                <FiThumbsUp size={30}/>
                <div style={{textAlign: "center"}}>{article.like}</div>
            </div>
        const thumbsDownView = article.has_dislike ?
            <div onClick={e => this.removeDisLike(article.id)} className="thumbs-has-view">
                <FiThumbsDown size={30}/>
                <div style={{textAlign: "center"}}>{article.dislike}</div>
            </div>
            :
            <div onClick={e => this.disLike(article.id)} className="thumbs-no-has-view">
                <FiThumbsDown size={30}/>
                <div style={{textAlign: "center"}}>{article.dislike}</div>
            </div>

        const articleView = loading === false ?
            <div className="article-view">
                <iframe className="article-view-content" width="1000px" height="800px" scrolling="auto" srcDoc={article.content} title={article.title}/>
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
