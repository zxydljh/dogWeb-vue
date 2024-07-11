import request from "@/utils/request";

export const getBuyDogList = () => {
    return request({
        url: '/user/buydog/list',
        method: 'get'
    })
}

export const saveToShoppingCart = (data) => {
    return request({
        url: '/user/buydog/saveToShoppingCart',
        method: 'post',
        data
    })
}