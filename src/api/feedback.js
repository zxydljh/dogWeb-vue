import request from "@/utils/request";

export const submitFeedback = (data) => {
  return request({
    url: "/user/feedback/save",
    method: "post",
    data,
  });
};