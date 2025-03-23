<template>
    <div class="footer-container"> 
        <div class="footer-content" v-for="infoItem in info">
            <div class="itembox" v-for="item in infoItem">
                <RouterLink>{{ item }}</RouterLink>
            </div>
        </div>
    </div>  
</template>

<script setup name='Footer'>
import { RouterLink } from 'vue-router';
import {ref} from 'vue'
const info=ref([
    ['加入我们','xxxxxx','xxxxxx','xxxxxx','xxxxxx'],
    ['客服咨询','xxxxxx','xxxxxx','xxxxxx','xxxxxx'],
    ['合作伙伴','xxxxxx','xxxxxx','xxxxxx','xxxxxx'],
    ['社区','xxxxxx','xxxxxx','xxxxxx','xxxxxx'],
])

</script>

<style scoped>
.footer-container{
    width:100%;
    height:200px;
    margin-top:50px;
    background-color: #f7f7f7;
    display:flex;
    justify-content: center;
}
.footer-content{
    width:auto;
    height:200px;
    padding:30px 100px;
    font-family: 'SimHei';
    color:#5e5e5e;
    line-height: 28px;
    font-size: medium;
}
</style>