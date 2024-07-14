import request from "@/utils/request";

export const pageQuery = (prams) => {
  return request({
    url: `/user/toy/page`,
    method: "get",
    params: prams
  });
};
