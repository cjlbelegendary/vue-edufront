<template>
  <div 
    class="classify-container"
  >
    <ul class="classify-list">
        <ClassifyItem v-for="(item,index) in list" :key="index" :item="item"></ClassifyItem>
    </ul>
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
</script>

<style scoped>
  .classify-container {
  /* 容器基础样式 */
  border-radius: 0.25rem;
  box-shadow: 0 0 10px 0 #d7d7d7;
  background-color: #1e293b; /* bg-slate-800 */
  height: 380px;
  width: 380px;

  /* 水平居中 */
  margin-left: auto;
  margin-right: auto;

  /* 左偏移 */
  position:relative;
  right:10px;
}

.classify-list {
  /* 列表内边距 */
  padding-top: 1.25rem;    /* py-5 = 5×0.25rem */
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