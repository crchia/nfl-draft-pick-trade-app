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
        <v-tabs density="compact" v-model="tab">
          <v-tab v-for="tab in tabs" :key="tab" :value="tab">{{ tab }}</v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row v-if="tab === 'New Trade'">
      <v-col>
        <v-row>
          <v-col cols="12" md="6">
            <trade-team-card
              :teamNum="1"
              :cur-team="tradesStore.team1"
              :cur-selected-picks="tradesStore.team1Picks"
            />
          </v-col>
          <v-col cols="12" md="6">
            <trade-team-card
              :teamNum="2"
              :cur-team="tradesStore.team2"
              :cur-selected-picks="tradesStore.team2Picks"
            />
          </v-col>
        </v-row>
        <v-row
          v-if="tradesStore.team1Picks.length && tradesStore.team2Picks.length"
        >
          <v-col>
            <trade-eval-card />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col> </v-col>
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
