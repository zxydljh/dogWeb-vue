import {createStore} from "vuex";

export default createStore({
    state: {
        phoneNumber: '',
        loaded: false
    },
    mutations: {
        setPhoneNumber(state, phoneNumber) {
            state.phoneNumber = phoneNumber
        },
        setLoaded(state,value){
            state.loaded = value
        }
    },
    actions: {},
    modules: {}
})