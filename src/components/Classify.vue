<template>
  <div 
    class="rounded shadow-[0_0_10px_0_#d7d7d7] bg-slate-800"
    :style="{height:'380px', width:'370px'}"
  >
    <ul class="py-5">
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
  
</style>