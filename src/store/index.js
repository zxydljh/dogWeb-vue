import { createStore } from "vuex";

export default createStore({
    state: {
        token: localStorage.getItem('userAuthToken') || '',
        id: '',
        phoneNumber: '',
        loaded: false,
        username: '',
        price: '',
        payType: '',
        member: '',
        orderItems: [],
        avatar: ''
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem('userAuthToken', token)
        },
        setPhoneNumber(state, phoneNumber) {
            state.phoneNumber = phoneNumber
        },
        setLoaded(state, value) {
            state.loaded = value
        },
        setUsername(state, username) {
            state.username = username
        },
        setPrice(state, price) {
            state.price = price
        },
        setPayType(state, type) {
            state.payType = type
        },
        setId(state, id) {
            state.id = id
        },
        setMember(state, member) {
            state.member = member
        },
        setOrderItems(state, orderItems) {
            state.orderItems = orderItems
        },
        setAvatar(state, avatar) {
            state.avatar = avatar
        }
    },
    actions: {},
    modules: {}
})