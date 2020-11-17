import "./ArticleDetailPage.css"


import React, {Component} from 'react';
import {checkResDataWithToast, getArticleById} from "../../api/apiCommon";

class ArticleDetailPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            article: {},
            loading: false,
            articleId: this.props.match.params.articleId
        }
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
        const {article} = this.state
        return (
            <div className="article-view">
                <div className="article-view-content" dangerouslySetInnerHTML={{__html: article.content}}/>
            </div>
        );
    }
}

export default ArticleDetailPage;