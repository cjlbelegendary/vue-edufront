<template>
  <div class='text-xs text-red-500'>慕课</div>
  <span>{{ user.token }}</span>
  <el-button type="primary">按钮</el-button>
  <el-icon><Search /></el-icon>
</template>

<script lang='ts' setup name='Home'>
  import {useUserStore} from '@/stores/user.js'
  const user=useUserStore()
</script>

<style scoped>
  
</style>