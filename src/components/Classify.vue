<template>
  <div class="classify-container">
    <ul class="classify-list">
        <ClassifyItem v-for="(item,index) in list" :key="index" :item="item" @getValue="getSonValue"></ClassifyItem>
    </ul>
  </div>
  <div class="info-box" :class="{'show':isShow}">
    <span style="font-weight: bold;font-size: small;">{{ curItem }}</span>
    <span>xxxxxxxxxxxxxxxxxxxx</span>
    <span>xxxxxxxxxxxxxxxxxxxx</span>
    <span>xxxxxxxxxxxxxxxxxxxx</span>
    <div class="nice-course">
      <div class="nice-item">
        <div class="nice-item-img" ></div>
        <div class="nice-item-content">
          <span>课程名称</span>
          <span>价格: 888￥</span>
        </div>
      </div>
      <div class="nice-item">
        <div class="nice-item-img" ></div>
        <div class="nice-item-content">
          <span>课程名称</span>
          <span>价格: 888￥</span>
        </div>
      </div>
      <div class="nice-item">
        <div class="nice-item-img" ></div>
        <div class="nice-item-content">
          <span>课程名称</span>
          <span>价格: 888￥</span>
        </div>
      </div>
      <div class="nice-item">
        <div class="nice-item-img" ></div>
        <div class="nice-item-content">
          <span>课程名称</span>
          <span>价格: 888￥</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup name='Classify'>
import ClassifyItem from './ClassifyItem.vue';
const list=[
    '前沿技术: 人工智能 / AIGC / 大模型',
    '前端开发: HTML5 / Vue.js / Node.js',
    '后端开发: Java / Python/Go',
    '移动开发: Flutter / Android / iOS',
    '计算机基础: 算法 / 数学 / 数据库',
    '测试运维: 自动化测试 / 容器',
    '更多方向: 产品设计 / UI设计 / 游戏',
]
import {ref} from 'vue'
const curItem=ref();//当前条目
const isShow=ref();//显示窗口
const getSonValue=(itemValue,isShowValue)=>{
  curItem.value=itemValue
  isShow.value=isShowValue
  // console.log("收到子节点的信息：",curItem.value,isShow.value)
}
</script>

<style scoped>
/* 信息框样式 */
.info-box {
  position: absolute;
  left: 370px;
  top: 0;
  width: 600px;
  height:380px;
  background: #ffffff;
  color: rgb(20, 20, 20);
  border-radius: 0px 16px 16px 0;
  padding: 30px;
  /* 隐藏状态 */
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  /* flex布局 */
  display: flex;
  flex-direction: column;
  /* 阴影 */
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
}
/* 显示状态 */
.info-box.show {
  opacity: 1;
  visibility: visible;
  z-index:999;
}

.nice-course{
  width:600px;
  height:190px;
  background-color:rgb(243, 245, 246);
  position:absolute;
  right:0;
  top:50%;
  border-radius: 0px 0 16px 0;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
}
.nice-item{
  width:270px;
  height:60px;
  background-color: rgb(243, 245, 246);
  margin:20px 10px 0 10px ;
  display:flex;
}
.nice-item-img{
  background-color: rgb(206, 206, 206);
  height:60px;
  width:100px;
}
.nice-item-content{
  margin-left:20px;
  display: flex;
  flex-direction: column;
  font-size: small;
}
  .classify-container {
  /* 容器基础样式 */
  border-radius: 20px 0 0 20px;
  box-shadow: 0 0 10px 0 #d7d7d7;
  background-color: #1e293b; /* bg-slate-800 */
  height: 380px;
  width: 380px;

  /* 水平居中 */
  /* margin-left: auto;
  margin-right: auto; */

  /* 左偏移 */
  position:relative;
  right:10px;
  /* 阴影 */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}

.classify-list {
  /* 列表内边距 */
  padding-top: 1.25rem;    
  padding-bottom: 1.25rem;
  
  /* 清除默认样式 */
  list-style: none;
  margin: 0;
  padding-left: 0;
}

/* 可选：响应式适配 */
@media (max-width: 640px) {
  .classify-container {
    width: 100%;
    max-width: 370px;
  }
}
</style>