import {commonGet, commonPostForm} from "./apiBase";

export const getIcpInfo = () => commonGet("/api/common/icp_info");
export const getVersion = () => commonGet("/api/common/version");
export const postVisited = (traceId: string) => commonPostForm("/api/common/visited", {traceId: traceId});
export const getAboutApp = () => commonGet("/api/common/about_app")

export function getArticleSampleList(pageNum: number, pageSize: number, searchKey: string) {
    return commonGet("/api/common/article/query_sample", {
        page_num: pageNum,
        page_size: pageSize,
        search_key: searchKey
    });
} // 获取文章列表sample

export const getArticleById = (articleId: string) => commonGet("/api/common/article/get_article", {article_id: articleId})
export const disLikeArticleById = (articleId: string) => commonPostForm("/api/common/article/mark/dislike", {article_id: articleId})
export const likeArticleById = (articleId: string) => commonPostForm("/api/common/article/mark/like", {article_id: articleId})
export const removeDisLikeArticleById = (articleId: string) => commonPostForm("/api/common/article/mark/remove_dislike", {article_id: articleId})
export const removeLikeArticleById = (articleId: string) => commonPostForm("/api/common/article/mark/remove_like", {article_id: articleId})

export const GetCarouselPicData = () => commonGet("/api/common/carousel/query")
export const GetCarouselPicById = (id: string) => commonGet("/api/common/picture/" + id)

export const GetCatchwordDataList = (key_word: string, from: number, limit: number) => commonGet("/api/common/catchword/query", {
    key_word,
    from,
    limit
})
