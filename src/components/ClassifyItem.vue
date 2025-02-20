<template>
  <li
    :style="{lineHeight:'50px'}"
    class="relative w-full cursor-pointer text-base pl-5 hover:bg-#3b4248 hover:text-blue-500 text-white"
    >
        <span class="text-sm">{{ props.item }}</span>
        <div
            class="absolute top-0.5 right-3 text-sm"
            :style="{lineHeight:'50px'}"
        >
            <el-icon>
                <CaretRight />
            </el-icon>
        </div>
  </li>
</template>

<script lang='ts' setup name='ClassifyItem'>

const props=defineProps(['item'])
</script>

<style scoped>
  
</style>