import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
    const isRegVisible = ref(false)
    const isLoginVisible = ref(false)

    const switchRegVisible = () => {
        isRegVisible.value = !isRegVisible.value
    }

    const switchLoginVisible = () => {
        isLoginVisible.value = !isLoginVisible.value
    }

    return { isRegVisible, isLoginVisible, switchLoginVisible, switchRegVisible }
})