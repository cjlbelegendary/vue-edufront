<template>
  <div class="swiper-container">
    <el-carousel :intercal="5000" arrow="always" height="380px" :style="{ height: '380px', width: '800px' }"
      indicator-position="outside">
      <el-carousel-item>
        <router-link to="/detail">
          <img class="rounded" src="@/assets/images/Swiper_1.jpg">
        </router-link>

      </el-carousel-item>
      <el-carousel-item>
        <router-link to="/detail">
          <img class="rounded" src="@/assets/images/Swiper_2.jpg">
        </router-link>

      </el-carousel-item>
      <el-carousel-item>
        <router-link to="/detail">
          <img class="rounded" src="@/assets/images/Swiper_3.png">
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script lang='ts' setup name='Swiper'>

</script>

<style scoped>
.swiper-container{
 position:relative;
 right:20px;
 box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
 border-radius: 0 10px 10px 0;
}
.el-carousel__item{
  border-radius: 0 10px 10px 0;
}
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