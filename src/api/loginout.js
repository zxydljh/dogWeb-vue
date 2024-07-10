import request from "@/utils/request";

export const userLogin = (data) => {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

export const userLogout = (data) => {
    return request({
        url: '/user/logout',
        method: 'post',
        data
    })
}