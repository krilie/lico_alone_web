import {commonGet, commonPostForm} from "./apiBase";

export const getIcpInfo = () => commonGet("/api/common/icp_info");
export const getVersion = () => commonGet("/api/common/version");
export const postVisited = (traceId) => commonPostForm("/api/common/visited", {traceId: traceId});
export const getAboutApp = () => commonGet("/api/common/about_app")

export function getArticleSampleList(pageNum, pageSize, searchKey) {
    return commonGet("/api/common/article/query_sample", {
        page_num: pageNum,
        page_size: pageSize,
        search_key: searchKey
    });
} // 获取文章列表sample

export const getArticleById = (articleId) => commonGet("/api/common/article/get_article", {article_id: articleId})
export const disLikeArticleById = (articleId) => commonPostForm("/api/common/article/mark/dislike", {article_id: articleId})
export const likeArticleById = (articleId) => commonPostForm("/api/common/article/mark/like", {article_id: articleId})
export const removeDisLikeArticleById = (articleId) => commonPostForm("/api/common/article/mark/remove_dislike", {article_id: articleId})
export const removeLikeArticleById = (articleId) => commonPostForm("/api/common/article/mark/remove_like", {article_id: articleId})

export const GetCarouselPicData = () => commonGet("/api/common/carousel/query")
export const GetCarouselPicById = (id) => commonGet("/api/common/picture/" + id)

export const GetCatchwordDataList = (key_word,from,limit) => commonGet("/api/common/catchword/query",{key_word,from,limit})
