import { defineStore } from 'pinia'
export const useUserStore=defineStore('user',{
  state:()=>({
    userName:"123",
  }),
  getters:{
    getUserNameStr(state){
      return state.userName+456;
    }
  },
  actions:{
    setuserName(){
      this.userName="456"
    }
  }
})