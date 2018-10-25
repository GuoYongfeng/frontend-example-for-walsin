import request from "utils/request";
import axios from "axios";

//定义接口地址
const URL = {
    // "GET_DETAIL": `${GROBAL_HTTP_CTX}/ALLOWANCES/list`,
    "GET_DETAIL": "/mes/info"
}

/**
 * 通过search_id 查询列表详情
 */
export const getDetail = (param) => {
    return request(URL.GET_DETAIL, {
        method: "get",
        param
    });
}
