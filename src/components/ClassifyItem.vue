<template>
    <li
      :style="{lineHeight:'50px'}"
      class="classify-item"
      @mouseover="isShow=true;transValue();"
      @mouseout="isShow=false;transValue();"
    >
      <span class="item-text">{{ props.item }}</span>
      <div class="icon-container">
        <el-icon>
          <CaretRight />
        </el-icon>
      </div>
    </li>
  </template>
  
  <script lang='ts' setup name='ClassifyItem'>
  const props=defineProps(['item'])
  import {ref} from 'vue'
  const isShow=ref(false)
  const value=ref(props.item)
  const emit=defineEmits(["getValue"])
  const transValue=()=>{
    emit("getValue",value.value,isShow.value)
  }
  </script>
  
  <style scoped>
  .classify-item {
    position: relative;
    width: 100%;
    cursor: pointer;
    font-size: 16px;
    padding-left: 20px;
    color: white;
    list-style: none;
  }
  
  .classify-item:hover {
    /* background-color: #3b4248; */
    color: #3b82f6;
  }
  
  .item-text {
    font-size: 14px;
  }
  
  .icon-container {
    position: absolute;
    top: 2px;
    right: 12px;
    font-size: 14px;
    line-height: 50px;
  }
  </style>