import Vue from 'vue'
import Vuex from 'vuex'
import state from './state';
import mutations from './mutations';

Vue.use(Vuex)

/**
 * state存放全局公用的数据
 */
export default new Vuex.Store({
    state,
    mutations
})