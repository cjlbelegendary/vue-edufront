import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const currentUser=ref('')
  const isLogin=ref(false)
  const users=ref({
    account:"",
    password:"",
  })
  const login=()=>{}
  const logout=()=>{}
  const register=(account,password)=>{
    users.value={account,password} 
    localStorage.setItem('xdclass_vue_users',JSON.stringify(users.value)) //将数据存储到本地
    localStorage.setItem('xdclass_vue_is_Login',true)
    isLogin.value=true
  }
  return {currentUser,isLogin,users,login,logout,register }
})
