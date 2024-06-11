import { defineStore } from 'pinia'

export const useTradesStore = defineStore('trades', () => {
  const trades = ref([])

  const team1 = ref(null)
  const team2 = ref(null)
  const team1Picks = ref([])
  const team2Picks = ref([])

  const saveTrade = () => {

  }

  return {
    trades,
    team1,
    team2,
    team1Picks,
    team2Picks,
    saveTrade,
  }
})
