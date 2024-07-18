import request from '@/utils/request'

export const getUserInfo = (id) => {
    return request({
        url: `/user/userinfo/${id}`,
        method: 'get'
    })
}

// 新增收货地址
export const addUserAddress = (data) => {
    return request({
        url: '/user/userinfo/addAddress',
        method: 'post',
        data
    })
}

export const alterUserInfo = (data) => {
    return request({
        url: '/user/userinfo/update',
        method: 'post',
        data
    })
}

// 获取地址列表
export const getAddressList = (id) => {
    return request({
        url: `/user/userinfo/addresses/${id}`,
        method: 'get'
    })
}

// 更新默认地址
export const updateDefaultAddress = (data) => {
    return request({
        url: '/user/userinfo/updateDefaultAddress',
        method: 'put',
        data
    })
}

// 获取已购买的商品
export const getPurchasedGoods = (id) => {
    return request({
        url: `/user/userinfo/purchasedGoods/${id}`,
        method: 'get'
    })
}
