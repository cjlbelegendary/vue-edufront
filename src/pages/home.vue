<template>
  <div style="width:100%;">
    <!-- 海报图 -->
    <!-- <img 
      class="w-full"
      src="@/assets/images/ad.png"
    > -->
    <!-- 头部导航 -->
    <div style="box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  margin-bottom: 10px;" >
      <div style=" width: 1200px; margin-left: auto; margin-right: auto;">
        <Header></Header>
      </div>
    </div>
    <!-- 主要内容 -->
    <div style=" width: 1200px; margin: 1rem auto;  ">
      <div style=" display: flex; align-items: center; justify-content: space-between;">
        <!-- 分类导航 -->
        <Classify></Classify>
        <!-- 轮播图 -->
        <Swiper></Swiper>
        <!-- 新人福利 -->
      </div>
      <!-- 高单价导航 -->
      <!-- 课程分类导航 -->
       <CourseList></CourseList>
    </div>
    <!-- 底部的内容导航 -->
  </div>
  <!-- 提醒登录浮层组件 -->
  <Login></Login>
  <Register></Register>
  
</template>

<script lang='ts' setup name='Home'>
import {useUserStore} from '@/stores/user.js'
import Header from '@/components/Header.vue'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue' 
import Classify from '@/components/Classify.vue'
import Swiper from '@/components/Swiper.vue'
import CourseList from '@/components/CourseList.vue'
const user=useUserStore()
</script>

<style scoped>

</style>