export default {
    saveUserName({commit},username){
        commit('saveUserName',username);
    },
    getCartCount({commit},count){
        commit('getCartCount',count)
    }
}