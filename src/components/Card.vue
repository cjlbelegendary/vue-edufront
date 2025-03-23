<template>
    <div class="course-card">
      <router-link to="/detail">
          <img class="card-image" v-lazy="card.coverImg">
      </router-link>
      
      <div class="card-content">
          <div class="title-container">
              <span class="title-text">
                  {{ props.card.title }}
              </span>
          </div>
  
          <div class="level-container">
              <span class="level-text">
                  级别: {{ convertLevel(props.card.courseLevel) }}
              </span>
              <span class="fire-icons">
                  <img class="fire-icon" src="https://front.cdn.xdclass.net/images/fire.webp">
                  <img class="fire-icon" src="https://front.cdn.xdclass.net/images/fire.webp">
                  <img class="fire-icon" src="https://front.cdn.xdclass.net/images/fire.webp">
                  <img class="fire-icon" src="https://front.cdn.xdclass.net/images/fire.webp">
                  <img class="fire-icon" src="https://front.cdn.xdclass.net/images/fire.webp">
              </span>
          </div>
          
          <div class="price-container">
              <span class="user-count">
                  <el-icon><User/></el-icon>
                  {{ card.uv }}
              </span>
              <div class="price-wrapper">
                  <div class="original-price">
                      ￥<span class="old-amount">{{ card.oldAmount }}</span>
                  </div>
                  <div class="discount-price">
                      ￥<span class="current-price">{{ card.amount }}</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script lang='ts' setup name=''>
  // 原有脚本保持不变
  const props=defineProps(["card"])
  const convertLevel = (level)=>{
      switch(level){
          case "JUNIOR":
              return "初级";
          case "MIDDLE":
              return "中级";
          case "SENIOR":
              return "高级";
          default:
              return "未知";
      }
  }
  </script>
  
  <style scoped>
  /* 卡片容器 */
  .course-card {
    cursor: pointer;
    width: 280px; /* w-70 = 17.5rem = 280px */
    border-radius: 12px; /* rounded-xl */
    box-shadow: 5px 5px 10px 0 #d5d5d5;
    overflow: hidden;
  }
  
  /* 卡片图片 */
  .card-image {
    border-top-left-radius: 8px; /* rounded-t-lg */
    border-top-right-radius: 8px;
    width: 100%;
    height: auto;
  }
  
  /* 卡片内容区域 */
  .card-content {
    padding: 8px; /* p-2 */
  }
  
  /* 标题容器 */
  .title-container {
    height: 40px; /* h-10 */
    margin-bottom: 8px; /* my-2 */
  }
  
  /* 标题文本 */
  .title-text {
    font-size: 14px; /* text-sm */
    width: 240px; /* w-60 */
    display: -webkit-box;
    -webkit-line-clamp: 2; /* line-clamp-2 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }
  
  /* 级别容器 */
  .level-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px; /* text-xs */
    margin: 8px 0; /* my-2 */
  }
  
  /* 火焰图标容器 */
  .fire-icons {
    display: flex;
    align-items: center;
  }
  
  /* 单个火焰图标 */
  .fire-icon {
    width: 12px; /* w-3 */
    height: 12px; /* h-3 */
    margin-right: 4px; /* mr-1 */
  }
  
  /* 价格容器 */
  .price-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px; /* mt-5px */
  }
  
  /* 用户数量 */
  .user-count {
    color: #7f7f7f; /* c-#7f7f7f */
    font-size: 20px; /* text-2 */
    display: flex;
    align-items: center;
  }
  
  /* 价格包装器 */
  .price-wrapper {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  
  /* 原价 */
  .original-price {
    color: #aaa; /* c-#aaa */
    font-size: 14px;
  }
  
  .old-amount {
    text-decoration: line-through;
  }
  
  /* 折扣价 */
  .discount-price {
    color: #e51b11; /* c-#e51b11 */
  }
  
  .current-price {
    color: #ef4444; /* text-red-500 */
    font-size: 16px; /* text-16px */
  }
  
  /* 响应式设计 */
  @media (max-width: 768px) {
    .course-card {
      width: 100%;
      max-width: 280px;
    }
    
    .title-text {
      width: auto;
      -webkit-line-clamp: 1;
    }
  }
  </style>