<template>
    <el-dialog width="500px"  v-model="modal.isRegVisible" class="relative " style="height: 450px;">
        <h1 class="text-center c-#404040 text-22px font-normal mb-1.5" style="position: relative;top:30px;">账号注册</h1>
        <div class="pb-44px flex items-center justify-center w-full" style="position: relative;top:40px;">
            <el-form
              name="register"
              ref="registerFormRef"
              :model="registerForm"  
              :rules="rules"
            >
                <!-- 账号 -->
                <el-form-item  prop="account">
                    <span>账号：</span>
                    <el-input v-model="registerForm.account" placeholder="请输入账号" />
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <span>密码：</span>
                    <el-input type="password" :show-password="true" v-model="registerForm.password" placeholder="请输入密码" />
                </el-form-item>
                <!-- 确认密码 -->
                <el-form-item prop="repassword">
                    确认密码：<el-input type="password" :show-password="true" v-model="registerForm.repassword" placeholder="请再次输入密码" />
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
import { reactive, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useModalStore } from '@/stores/modal'
const account = ref('')
const password = ref('')
const rePassword = ref('')

const registerForm = reactive({
    account:'',
    password:'',
    repassword:''
})

const rules = reactive({
    account:[
        {
            required:true,
            message:"账号不能为空",
            trigger: 'blur'
        },
        {
            min:2,
            max:12,
            message:"账号长度为2~12位",
            trigger: 'blur'
        }
    ],
    password:[
        {
            required:true,
            message:"密码不能为空",
            trigger: 'blur'
        },
        {
            min:8,
            max:16,
            message:"密码长度为8~16位",
            trigger: 'blur'
        }
    ],
    repassword:[
        {
            required:true,
            message:"请确认密码",
            trigger: 'blur'
        },
        {
            min:8,
            max:16,
            message:"密码长度为8~16位",
            trigger: 'blur'
        }
    ]
})

const user = useUserStore()
const modal = useModalStore()
function handleFinish() {
    if(registerForm.password !== registerForm.repassword){
        //密码验证
        ElMessage({
            message: '两次密码不一致',
            type: 'warning',
        })
        return
    } else {
        //账号验证
        if(user.users.account===registerForm.account){
            ElMessage({
                message: '账号已存在!',
                type: 'warning',
            })
        }else{
            //注册
            user.register(registerForm.account,registerForm.password)
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