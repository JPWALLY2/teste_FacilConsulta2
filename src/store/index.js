import { createStore } from 'vuex'

export default createStore({
  state: {
    pro:[],
  },
  actions: {
    addPr({commit}, pr){
      return new Promise( resolve => {
        setTimeout(() => {
          pr.id = Date.now()
          commit('addPr', pr)
          resolve(pr)
        }, 500)
      })
    }
  },  
  mutations: {
    addPr(state, payload){
      state.pro.push(payload)
    }
  },
  modules: {
  }
})
