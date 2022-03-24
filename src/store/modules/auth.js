export default {
    namespaced: true,
    state: {
        user: {
            id: null,
            username: null,
            email: null,
            password: null
        }
    }, 
    getters: {
        getUser: (state) => state.user,
    },
    mutations: { //commit
        setUser(state, user) {
            state.user = user;
        }
    },
    actions:{ //dispatch

    }
}