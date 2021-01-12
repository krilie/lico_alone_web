import {ToastErr, ToastWarn} from "../tools/toastNormal";
import axios from "axios";
import qs from "qs";

let apiBaseUrl = process.env.NODE_ENV === "development"?"":'https://api-app.lizo.top';
export const imageProxy = 'https://imageproxy.lizo.top' // 缩略图地址
export const minioUrl = 'https://minio.lizo.top' // minio地址
export const imageProxied = (path, ops) => imageProxy + "/" + ops + "/" + path.replace(minioUrl + "/", "")

// res.data is returned data from api with have filed [code message data]
export const checkResData = (res) => res.data.code === 2000 ? res.data.data : undefined;
export const getResData = (res) => checkResData(res) ? res.data.data : undefined;
export const checkIsNotFound = (res) => res.data.code === 4004;
export const checkResDataWithToast = (res) => {
    if (res.data.code !== 2000) {
        ToastWarn(res.data.message);
        return undefined;
    } else {
        return res.data.data;
    }
}
export const checkIsSuccessWithToast = (res) => {
    if (res.data.code !== 2000) {
        ToastWarn(res.data.message);
        return false;
    } else {
        return true;
    }
}

// 非api 外层返回结构可能不统一
const apiCommon = axios.create({baseURL: apiBaseUrl,withCredentials:true})

// 返回后拦截
apiCommon.interceptors.response.use(
    data => {
        return data
    },
    err => {
        if (err.response !== undefined && err.response !== null) {
            if (err.response.status === 502 || err.response.status === 504) {
                ToastErr("网关错误");
            } else if (err.response.status === 401) {
                ToastErr("认证信息无效");
            } else if (err.response.status === 500) {
                ToastErr("服务器错误");
            } else if (err.response.status === 404) {
                ToastErr("未找到内容");
            } else {
                ToastErr("未知错误");
            }
        } else {
            ToastErr(err.toString())
        }
        return Promise.reject(err);
    }
);

export const commonGet = (url, query) => {
    return apiCommon({
        method: "get",
        url: query === undefined ? `${url}` : `${url}?${qs.stringify(query)}`,
    });
};


// @RequestBody请求
export const commonPostJson = (url, params) => {
    return apiCommon({
        method: "post",
        url: `${url}`,
        data: params,
        headers: {
            "Content-Type": "application/json",
            charset: "utf-8"
        }
    });
};

// @RequestParam请求
export const commonPostQuery = (url, params) => {
    return apiCommon({
        params: params,
        method: "post",
        url: `${url}`,
    });
};


// @RequestParam请求
export const commonPostForm = (url, params) => {
    return apiCommon({
        method: "post",
        url: `${url}`,
        data: qs.stringify({...params}),
        headers: {"Content-Type": "application/x-www-form-urlencoded"}
    });
};

export const commonGetQuery = (url, query) => {
    console.log(query)
    return apiCommon({
        method: "get",
        url: query === undefined ? `${url}` : `${url}?${qs.stringify(query)}`,
    });
};

export const commonPostMultiForm = (url, params) => {
    let param = new window.FormData();
    for (let i in params) {
        param.append(i, params[i]);
    }
    return apiCommon({
        method: 'post',
        url: `${url}`,
        data: param,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};
