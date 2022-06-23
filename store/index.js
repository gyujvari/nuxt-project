export const state = () => ({
    data: [],
    isLoggedIn: false
  })
  
  export const getters = {
    getData(state) {
      return state.data
    },
    getLoggedInState(state) {
        return state.isLoggedIn
      }
  }
  
  export const mutations = {
    setData(state, payload) {
      state.data = payload
    },
    setLoggedIn(state, payload) {
        state.isLoggedIn = payload
    }
  }
  
  export const actions = {
    async fetchLogin({commit},payload) {
        const user = payload.user
        const password =  payload.password
        await this.$axios.$post('https://otthoni-feladat-backend.herokuapp.com/login',{user: user, password:password}).then((res)=>{
            console.log(res.token,'response')
                if (res.token !== ""){
                    commit('setLoggedIn',true)
                    this.$axios.$get('https://otthoni-feladat-backend.herokuapp.com/data',{headers : { 'x-api-key' : `${res.token}`}}).then((res)=>{
                    commit('setData',res)
                })
            }
        })
    },
  }