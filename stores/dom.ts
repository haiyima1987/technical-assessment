import { defineStore } from 'pinia'
import { Layout } from '~/constants'

export const useDomStore = defineStore('domStore', () => {
  const isLoading = ref(false)
  const isError = ref(false)
  const errorMessage = ref('')
  const layout = ref(Layout.Grid)

  function setIsLoading(newVal: boolean) {
    isLoading.value = newVal
  }

  function setIsError(newVal: boolean, message?: string) {
    isError.value = newVal
    errorMessage.value = message || 'Error'
  }

  function setLayout(newVal: Layout) {
    layout.value = newVal
  }

  return {
    setIsLoading,
    setIsError,
    setLayout,
    isLoading,
    isError,
    errorMessage,
    layout,
  }
})
