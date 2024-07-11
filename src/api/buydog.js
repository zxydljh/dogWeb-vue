import request from "@/utils/request";

export const getBuyDogList = () => {
    return request({
        url: '/user/buydog/list',
        method: 'get'
    })
}