import {createStore} from 'vuex';
import auth from './modules/auth';

const store = createStore({
    namespaced: true,
    modules: {
        auth
    }
});

export default store;