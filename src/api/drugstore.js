import request from "@/utils/request";
export const pageQuery = (prams) => {
    return request({
        url: `/user/drugstore/page`,
        method: "get",
        params: prams
    });
};

