<template>
  <v-container fluid>
    <v-row>
      <v-col></v-col>
      <v-col class="text-center">
        <v-icon size="small">mdi-lightning-bolt-outline</v-icon>
        THOR
        <v-icon size="small">mdi-lightning-bolt-outline</v-icon>
      </v-col>
      <v-col class="d-flex justify-end">
        <theme-btn />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="auto">
        <v-badge
          color="red"
          v-if="tradesStore.trades.length"
          :content="tradesStore.trades.length"
        >
          <v-tabs density="compact" v-model="tab">
            <v-tab value="New Trade">New Trade</v-tab>
            <v-tab value="Saved Trades">Saved Trades</v-tab>
          </v-tabs>
        </v-badge>
        <v-tabs density="compact" v-model="tab" v-else>
          <v-tab value="New Trade">New Trade</v-tab>
          <v-tab value="Saved Trades">Saved Trades</v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row v-if="tab === 'New Trade'">
      <v-col>
        <v-row>
          <v-col cols="12" md="6">
            <trade-team-card
              :teamNum="1"
              :curTeam="tradesStore.team1"
              :curSelectedPicks="tradesStore.team1Picks"
              @update:team="(payload) => tradesStore.team1 = payload"
              @update:selectedPicks="(payload) => tradesStore.team1Picks = payload"
              />
              </v-col>
              <v-col cols="12" md="6">
                <trade-team-card
                :teamNum="2"
                :curTeam="tradesStore.team2"
                :curSelectedPicks="tradesStore.team2Picks"
                @update:team="(payload) => tradesStore.team2 = payload"
                @update:selectedPicks="(payload) => tradesStore.team2Picks = payload"
            />
          </v-col>
        </v-row>
        <v-row
          v-if="tradesStore.team1Picks.length && tradesStore.team2Picks.length"
        >
          <v-col>
            <trade-eval-card
              :team-1-picks="tradesStore.team1Picks"
              :team-2-picks="tradesStore.team2Picks"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        v-for="i in tradesStore.trades.length"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <saved-trade-dialog :tradeIdx="i - 1" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useTradesStore } from '~~/stores/trades'
const tradesStore = useTradesStore()

const tabs = ['New Trade', 'Saved Trades']
const tab = ref(tabs[0])
</script>

<style lang="scss" scoped></style>
