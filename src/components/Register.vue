<template>
    <el-dialog width="500px"  v-model="modal.isRegVisible" class="relative ">
        <h1 class="text-center c-#404040 text-22px font-normal mb-1.5">账号注册</h1>
        <div class="pb-44px flex items-center justify-center w-full">
            <el-form name="register">
                <!-- 账号 -->
                <el-form-item>
                    账号：<el-input v-model="account" placeholder="请输入账号" />
                </el-form-item>
                <!-- 密码 -->
                <el-form-item>
                    密码：<el-input type="password" :show-password="true" v-model="password" placeholder="请输入密码" />
                </el-form-item>
                <!-- 确认密码 -->
                <el-form-item>
                    确认密码：<el-input type="password" :show-password="true" v-model="rePassword" placeholder="请再次输入密码" />
                </el-form-item>
                <el-form-item>
                    <el-button 
                        type="primary" 
                        @click="handleFinish"
                        class="flex w-full items-center justify-center bg-#444b52 text-white rounded-full"
                    >
                        <span>立即注册</span>
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- 跳转登录 -->
        <div class="absolute w-full h-44px left-0 flex items-center justify-center bg-slate-100 bottom-0">
            <span>已有账号?</span>
            <span
                class="text-blue-400 cursor-pointer"
                @click="
                    ()=>{
                        modal.switchRegVisible()
                        modal.switchLoginVisible()
                    }
                "
            >
                立即登录
            </span>
        </div>
    </el-dialog>
  
</template>

<script lang='ts' setup name='Register'>
import { ElMessage } from 'element-plus';
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useModalStore } from '@/stores/modal'
const account = ref('')
const password = ref('')
const rePassword = ref('')

const user = useUserStore()
const modal = useModalStore()
function handleFinish() {
    if(password.value !== rePassword.value){
        //密码验证
        ElMessage({
            message: '两次密码不一致',
            type: 'warning',
        })
        return
    } else {
        //账号验证
        if(user.users.account===account.value){
            ElMessage({
                message: '账号已存在!',
                type: 'warning',
            })
        }else{
            //注册
            user.register(account.value,password.value)
            //跳转
            modal.switchRegVisible()
            ElMessage({
                message: '注册成功!',
                type: 'success',
            })
        }
    }
    
}
</script>

<style scoped>
</style>