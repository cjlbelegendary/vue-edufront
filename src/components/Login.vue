<template>
  <el-dialog width="500px" v-model="modal.isLoginVisible" class="relative " style="height: 400px;">
    <h1 class="text-center c-#404040 text-22px font-normal mb-1.5" style="position: relative;top:30px;">账号登录</h1>
    <div class="pb-44px flex items-center justify-center w-full" style="position: relative;top:50px;">
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
                    class="flex w-full items-center justify-center bg-#444b52 text-white rounded-full"
                >
                    <span>立即登录</span>
                </el-button>
            </el-form-item>
        </el-form>
    </div>
    <!-- 跳转注册 -->
    <div class="absolute w-full h-44px left-0 flex items-center justify-center bg-slate-100 bottom-0">
            <span>没有账号?</span>
            <span
                class="text-blue-400 cursor-pointer"
                @click="
                    ()=>{
                        modal.switchRegVisible()
                        modal.switchLoginVisible()
                    }
                "
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
</style>