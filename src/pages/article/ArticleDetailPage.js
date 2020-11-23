import "./ArticleDetailPage.css"


import React, {Component} from 'react';
import {checkResDataWithToast, getArticleById} from "../../api/apiCommon";

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
        const {article,loading} = this.state
        return loading===false ?
            <div className="article-view">
                <div className="article-view-content ck-content" dangerouslySetInnerHTML={{__html: article.content}}/>
            </div>
            :
            <div>loading</div>
    }
}

export default ArticleDetailPage;
