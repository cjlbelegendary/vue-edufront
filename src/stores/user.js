import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'

export const useUserStore = defineStore('user', () => {
  const currentUser=ref('')
  const isLogin=ref(false)
  const users=ref({
    account:"",
    password:"",
  })
  const login=(account, password)=>{
    const foundUser=users.value.account==account && users.value.password==password
    console.log(users.value.account,account)
    console.log(users.value.account==account)
    console.log(users.value.password==password)
    console.log(foundUser)
    if(foundUser){
      ElMessage({
        message: '登录成功',
        type: 'success',
      })
      isLogin.value=true
      currentUser.value=account
    }else{
      ElMessage({
        message: '账号或密码错误!',
        type: 'error',
      })
    }
  }
  const logout=()=>{
    // console('isLogin:',isLogin.value)
    isLogin.value=false
    currentUser.value=''
    // console('isLogin:',isLogin.value)
    ElMessage({
      message: '退出登录',
      type: 'success',
  })
  }
  const register=(account,password)=>{
    users.value={account,password} 
    localStorage.setItem('xdclass_vue_users',JSON.stringify(users.value)) //将数据存储到本地
    localStorage.setItem('xdclass_vue_is_Login',true)
    isLogin.value=true
  }
  return {currentUser,isLogin,users,login,logout,register }
},
{
  persist: true,//数据持久化
}
)
