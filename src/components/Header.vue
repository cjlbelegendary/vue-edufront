<template>
  <div class='flex items-center gap-2'>
    <img 
        class="h-16 w-36"
        src="@/assets/images/logo.png"
    />
    <div class="flex items-center justify-between flex-[1]">
        <a href="#">首页</a>
        <a href="#">课程中心</a>
        <a href="#" class="flex items-center justify-center">
          <img
            src="@/assets/images/VIP.png"
            class="w-5 h-5"
          />
          <span>超级会员</span>
        </a>
        <a href="#">工具</a>
        <a href="#">
          <span>自学路线</span>
          <el-icon>
            <ArrowDownBold />
          </el-icon>
        </a>
        <a href="#">
          <span>一对一辅导</span>
          <el-icon>
            <ArrowDownBold />
          </el-icon>
        </a>
        <a href="#">
          <el-input placeholder="请输入搜索内容" class="w-60">
            <template #append>
              <el-icon>
                <Search />
              </el-icon>
            </template>
          </el-input>
        </a>
        <a href="#">兑换码</a>
        <a href="#">云服务器</a>
    </div>
    <div v-show="!user.isLogin">
      <el-button link size="large" @click="modal.switchLoginVisible">登录</el-button>
      <el-button link size="large" @click="modal.switchRegVisible">注册</el-button>  
    </div>
    <div v-show="user.isLogin">{{ user.users.account }}</div>
  </div>
</template>

<script lang='ts' setup name=''>
import { ArrowDownBold,Search } from '@element-plus/icons-vue';
import {ref} from 'vue'
import { useModalStore } from '@/stores/modal.js'
import { useUserStore } from '@/stores/user.js'

const modal=useModalStore()
const user=useUserStore()
const input=ref("")
const login=()=>{}
const register=()=>{}
</script>

<style scoped>
  
</style>