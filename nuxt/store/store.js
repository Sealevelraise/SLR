import { reactive } from 'vue'

export const store = reactive({
  spender: false,
  projectowner: false,
  spenderSelected() {
    this.spender = true
    this.projectowner = false
  },
  projectownerSelected() {
    this.spender = false
    this.projectowner = true
  },
  donaterConnected: false,
  pConnected: false,
})
