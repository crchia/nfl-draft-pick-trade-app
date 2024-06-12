<template>
  <v-dialog v-model="dialog" max-width="1500">
    <template v-slot:activator="{ props }">
      <saved-trade-summary-card v-bind="props" :trade-idx="tradeIdx" />
    </template>
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="12" md="6" v-for="(team, i) in trade" :key="i">
            <trade-team-card
              :teamNum="i + 1"
              :curTeam="team.team"
              :curSelectedPicks="team.picks"
              :is-new-trade="false"
              @update:team="(payload) => updateTeam(i, payload)"
              @update:selectedPicks="
                (payload) => updateSelectedPicks(i, payload)
              "
            />
          </v-col>
        </v-row>
        <v-row v-if="trade[0].picks.length && trade[1].picks.length">
          <v-col>
            <trade-eval-card
              :team-1-picks="trade[0].picks"
              :team-2-picks="trade[1].picks"
              :trade-idx="tradeIdx"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { useTradesStore } from '~~/stores/trades'
const tradesStore = useTradesStore()

const props = defineProps({
  tradeIdx: Number,
})

const dialog = ref(false)
const trade = computed(() => tradesStore.trades[props.tradeIdx])


const updateTeam = (idx, newTeam) => {
  trade.value[idx] = {
    team: newTeam,
    picks: [],
  }
}

const updateSelectedPicks = (idx, newPicks) => {
  trade.value[idx].picks = newPicks
}
</script>

<style lang="scss" scoped></style>
