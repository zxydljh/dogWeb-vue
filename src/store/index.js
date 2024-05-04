import {createStore} from "vuex";

export default createStore({
    state: {
        id: '',
        phoneNumber: '',
        loaded: false,
        username: '',
        price: '',
        payType: '',
        member: '',
        avatar: ''
    },
    mutations: {
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
        setAvatar(state, avatar) {
            state.avatar = avatar
        }
    },
    actions: {},
    modules: {}
})