<template>
    <el-dialog 
      width="500px" 
      v-model="modal.isLoginVisible" 
      class="login-dialog" 
      style="height: 400px;"
    >
      <h1 class="login-title">账号登录</h1>
      <div class="form-container">
          <el-form name="login">
              <!-- 账号 -->
              <el-form-item>
                  <span>账号：</span>
                  <el-input v-model="account" placeholder="请输入账号" />
              </el-form-item>
              <!-- 密码 -->
              <el-form-item>
                  <span>密码：</span>
                  <el-input type="password" :show-password="true" v-model="password" placeholder="请输入密码" />
              </el-form-item>
              <el-form-item>
                  <el-button 
                      type="primary" 
                      @click="handleFinish(account,password)"
                      class="login-button"
                  >
                      <span>立即登录</span>
                  </el-button>
              </el-form-item>
          </el-form>
      </div>
      <!-- 跳转注册 -->
      <div class="register-container">
              <span>没有账号?</span>
              <span
                  class="register-link"
                  @click="modal.switchRegVisible();modal.switchLoginVisible()"
              >
                  立即注册
              </span>
          </div>
    </el-dialog>
  </template>

<script lang='ts' setup name='Login'>
import { ref } from 'vue'
import {useUserStore} from '@/stores/user.js'
import {useModalStore} from "@/stores/modal.js"

const account =ref('')
const password=ref('')

const user=useUserStore()
const modal=useModalStore()

function handleFinish (account,password) {
    user.login(account,password)
    modal.switchLoginVisible()
}

</script>

<style scoped>
/* 对话框容器 */
.login-dialog {
  position: relative;
}

/* 标题样式 */
.login-title {
  text-align: center;
  color: #404040;
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 0.375rem;
  position: relative;
  top: 30px;
}

/* 表单容器 */
.form-container {
  padding-bottom: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  top: 50px;
}

/* 登录按钮 */
.login-button {
  display: flex !important;
  width: 100%;
  align-items: center;
  justify-content: center;
  /* background-color: #466788 !important; */
  color: white !important;
  border-radius: 9999px !important;
}

/* 注册链接容器 */
.register-container {
  position: absolute;
  width: 100%;
  height: 44px;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f5f9;
}

/* 注册链接文字 */
.register-link {
  color: #60a5fa;
  cursor: pointer;
  margin-left: 8px;
}

/* 交互优化 */
.register-link:hover {
  text-decoration: underline;
}

.login-button:hover {
  background-color: #373d44 !important;
}

/* 移动端适配 */
@media (max-width: 576px) {
  .login-dialog {
    width: 90% !important;
    min-width: unset !important;
  }
  
  .login-title {
    font-size: 20px;
    top: 20px;
  }
  
  .form-container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>