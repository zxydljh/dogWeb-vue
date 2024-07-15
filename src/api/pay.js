import request from "@/utils/request";

export const payOrderItems = (id,payType,price,orderItems) => {
    return request({
        url: '/user/pay',
        method: 'post',
        data: {
            id: id,
            payType: payType,
            price: price,
            shoppingCartList: orderItems
        }
    })
}