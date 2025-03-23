<template>
  <div class="course-list">
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
import { getCourse } from '@/api/course'
onMounted(async()=>{
    try{
        const response=await getCourse();
        console.log(response)
        data.value=response;
    } catch(err){
        console.log(err)
    }
    
})
</script>

<style scoped>
.course-list {
  display: flex;
  flex-direction: column;
  gap: 32px;  /* Tailwind gap-8 = 2rem = 32px */
  margin-top: 40px; /* Tailwind mt-10 = 2.5rem = 40px */
}

/* 可选：添加响应式布局 */
@media (max-width: 768px) {
  .course-list {
    gap: 24px;
    margin-top: 32px;
  }
}
</style>