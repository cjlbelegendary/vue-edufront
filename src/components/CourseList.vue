<template>
  <div class='flex flex-col gap-8 mt-10'>
    <CardContainer
        v-for="item in data"
        key="{index}"
        :title="item.name"
        :summay="item.summary"
        :productList="item.productList.slice(0,4)"
    />
  </div>
</template>

<script lang='ts' setup name='CourseList'>
import CardContainer from '@/components/CardContainer.vue'
import { onMounted } from 'vue';
import axios from 'axios';
import { ref } from 'vue';
const data = ref()

onMounted(async () => {
    try{
        const response = await axios.get(
            "https://api-v2.xdclass.net/api/card/v1/list"
        )
        data.value=response.data.data //将请求到的数据赋值给cards
    } catch(err){
        console.error(err)
    }
})
</script>

<style scoped>
  
</style>