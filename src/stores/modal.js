import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
    const isRegVisible = ref(false)
    const isLoginVisible = ref(false)

    const switchRegVisible = () => {
        console.log("switchReg",isRegVisible.value)
        isRegVisible.value = !isRegVisible.value
            // if(isRegVisible.value){
            //     isLoginVisible.value = false
            // }
        console.log(isRegVisible.value)
    }

    const switchLoginVisible=()=>{
        isLoginVisible.value = !isLoginVisible.value
        if(isLoginVisible.value){
            isRegVisible.value = false
        }
    }

    return { isRegVisible,isLoginVisible,switchLoginVisible,switchRegVisible}
})