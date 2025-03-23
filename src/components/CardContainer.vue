<template>
    <div>
      <!-- 标题+描述 -->
      <div class="title-container">
          <img
              class="hot-icon"
              src="https://front.cdn.xdclass.net/images/icon_hot.webp"
          >
          <span class="title-text">{{ props.title }}</span>
      </div>
  
      <!-- 课程产品列表 -->
       <div class="product-list-container">
          <div class="product-list">
              <Card 
                  v-for="item in props.productList"
                  key="{index}"
                  :card="item" 
              />
          </div>
       </div>
    </div>
  </template>
  
  <script lang='ts' setup name=''>
  import Card from '@/components/Card.vue'
  const props = defineProps(["title","summary","productList"])
  </script>
  
  <style scoped>
  /* 标题容器 */
  .title-container {
    display: flex;
    align-items: center;
  }
  
  /* 热度图标 */
  .hot-icon {
    width: 20px;
    height: 20px;
  }
  
  /* 标题文本 */
  .title-text {
    font-size: 1.5rem; /* 假设text-3对应24px */
    margin-left: 4px;  /* ml-1 = 0.25rem = 4px */
  }
  
  /* 产品列表容器 */
  .product-list-container {
    display: flex;
    align-items: center;
    margin-top: 12px; /* mt-3 = 0.75rem = 12px */
  }
  
  /* 产品列表 */
  .product-list {
    display: flex;
    gap: 20px; /* gap-5 = 1.25rem = 20px */
  }
  
  /* 响应式适配 */
  @media (max-width: 768px) {
    .product-list {
      gap: 10px;
      flex-wrap: wrap;
    }
    
    .title-text {
      font-size: 1.2rem;
    }
  }
  </style>