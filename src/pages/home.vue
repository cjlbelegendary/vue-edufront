<template>
  <div class='home'>慕课</div>
  <span>{{ user.token }}</span>
</template>

<script lang='ts' setup name='Home'>
  import {useUserStore} from '@/stores/user.js'
  const user=useUserStore()
</script>

<style scoped>
  
</style>