export const state = () => ({
    data: [],
    isLoggedIn: false,
    unAuthorized:false,
    isLoading:false,
    errorMessage:''
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
    },
    setUnathorized(state, payload) {
        state.unAuthorized = payload
    },
    setLoading(state, payload) {
        state.isLoading = payload
    },
    setErrorMessage(state, payload) {
        state.errorMessage = payload
    }
  }
  
  export const actions = {
    async fetchLogin({commit},payload) {
        const user = payload.user
        const password =  payload.password
        await this.$axios.$post('https://otthoni-feladat-backend.herokuapp.com/login',{user: user, password:password}).then((res)=>{
                commit('setLoading', true)
                if (res.token !== ""){
                    commit('setLoggedIn',true)
                    commit('setLoading', false)
                    this.$axios.$get('https://otthoni-feladat-backend.herokuapp.com/data',{headers : { 'x-api-key' : `${res.token}`}}).then((res)=>{
                    commit('setData',res)
                    })
                }
                else{
                    commit('setLoading', false)
                    commit('setErrorMessage', "Serverside error :(!")

                }
        }).catch((err)=>{
            if( err.response.status == 401){
                commit('setUnathorized', true)
                commit('setErrorMessage', "Invalid user or password!")
            }
        })
    },
  }