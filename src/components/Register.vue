<template>
    <el-dialog width="500px" v-model="modal.isRegVisible" class="custom-dialog">
        <h1 class="register-title">注册</h1>
        <div class="form-container">
            <el-form
              name="register"
              ref="registerFormRef"
              :model="registerForm"  
              :rules="rules"
            >
                <!-- 账号 -->
                <el-form-item prop="account">
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
                        class="register-button"
                    >
                        <span>立即注册</span>
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- 跳转登录 -->
        <div class="login-link">
            <span>已有账号?</span>
            <span
                class="login-text"
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
        },
        {  // 新增自定义校验规则
            validator: (rule, value, callback) => {
                if (value !== registerForm.password) {
                callback(new Error('两次密码不一致'));
                } else {
                callback();
                }
            },
            trigger: ['blur', 'change']  // 同时监听输入和变化事件
        }
        
    ]
})
const registerFormRef=ref()
const user = useUserStore()
const modal = useModalStore()
const handleFinish = () => {
  registerFormRef.value.validate((valid) => {
    if (!valid) {
      ElMessage.warning('请正确填写表单')
      return false
    }
    
    // 表单验证通过后检查账号是否存在
    if (user.users.account === registerForm.account) {
      ElMessage.warning('账号已存在!')
    } else {
      user.register(registerForm.account, registerForm.password)
      modal.switchRegVisible()
      ElMessage.success('注册成功!')
    }
  })
}
</script>

<style scoped>
.custom-dialog {
    height: 450px;
    position: relative;
}

.register-title {
    text-align: center;
    color: #404040;
    font-size: 22px;
    font-weight: normal;
    margin-bottom: 0.375rem;
    position: relative;
    top: 30px;
}

.form-container {
    padding-bottom: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 40px;
}

.register-button {
    display: flex !important;
    width: 100%;
    align-items: center;
    justify-content: center;
    /* background-color: #466788 !important; */
    color: white !important;
    border-radius: 9999px !important;
    margin-bottom: 40px;
}

.login-link {
    position: absolute;
    width: 100%;
    height: 44px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f5f9;
    bottom: 0;
}

.login-text {
    color: #6677cc;
    cursor: pointer;
}
</style>