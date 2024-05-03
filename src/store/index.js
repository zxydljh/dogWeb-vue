import {createStore} from "vuex";

export default createStore({
    state: {
        phoneNumber: '',
        loaded: false,
        username: '',
    },
    mutations: {
        setPhoneNumber(state, phoneNumber) {
            state.phoneNumber = phoneNumber
        },
        setLoaded(state,value){
            state.loaded = value
        },
        setUsername(state, username){
            state.username = username
        },
    },
    actions: {},
    modules: {}
})