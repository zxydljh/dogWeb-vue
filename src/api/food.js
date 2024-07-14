import request from "@/utils/request";
export const pageQuery = (prams) => {
    return request({
        url: `/user/food/page`,
        method: "get",
        params: prams
    });
};
