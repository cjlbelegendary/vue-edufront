<template>
  <el-carousel
    :intercal="5000"
    arrow="always"
    height="380px"
    :style="{height:'380px', width:'840px'}"
    indicator-position="outside"
  >
    <el-carousel-item>
        <img
            class="rounded"
            src="@/assets/images/Swiper_1.jpg"
        >
    </el-carousel-item>
    <el-carousel-item>
        <img
            class="rounded"
            src="@/assets/images/Swiper_2.jpg"
        >
    </el-carousel-item>
    <el-carousel-item>
        <img
            class="rounded"
            src="@/assets/images/Swiper_3.jpg"
        >
    </el-carousel-item>
  </el-carousel>
</template>

<script lang='ts' setup name='Swiper'>
  
</script>

<style scoped>
  .el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>