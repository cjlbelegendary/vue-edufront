<template>
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <img 
        style="height: 4rem;width: 10rem;margin-right: 0.5rem;"
        src="@/assets/images/logo.png"
    />
    <div style="display: flex;align-items: center;justify-content: space-between;flex-grow: 1; flex-shrink: 1; flex-basis: 0%;">
        <a href="#">首页</a>
        <a href="#">课程中心</a>
        <a href="#" style="display: flex;align-items: center;justify-content:center">
          <img
            src="@/assets/images/VIP.png"
            style="width: 1.25rem;height: 1.25rem;"
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
          <el-input placeholder="请输入搜索内容" style="width: 15rem;">
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
    <div v-if="!user.isLogin">
      <el-button link size="large" @click="modal.switchLoginVisible">登录</el-button>
      <el-button link size="large" @click="modal.switchRegVisible">注册</el-button>  
    </div>
    <div v-else>
      <el-popconfirm title="是否退出登录?" @confirm="user.logout">
        <template #reference>
          <el-button>{{ user.users.account }}</el-button>
      </template>
      </el-popconfirm>
    </div>
  </div>
</template>

<script lang='ts' setup name='Header'>
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