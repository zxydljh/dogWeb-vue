import request from "@/utils/request";

export const getListByUserId = (userId) => {
  return request({
    url: `/user/shoppingCart/list/${userId}`,
    method: "get"
  });
};