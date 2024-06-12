<template>
  <v-card style="border: 1px solid" class="py-2" variant="flat">
    <v-card-title>Trade {{ tradeIdx + 1 }}</v-card-title>
    <v-card-text v-for="team in trade" :key="team.team">
      <v-list-item :prepend-avatar="getTeamLogo(team.team)" :title="team.team">
        <v-list-item-subtitle>
          <v-icon>mdi-lectern</v-icon>
          <v-chip
            class="ml-1"
            size="small"
            v-for="pick in team.picks"
            :key="pick.pick"
          >
            {{ pick.pick }}
          </v-chip>
        </v-list-item-subtitle>
      </v-list-item>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="red" @click.stop="() => tradesStore.trades.splice(tradeIdx, 1)"
        >Delete Trade</v-btn
      >
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { getTeamLogo } from '~/helpers'
import { useTradesStore } from '~~/stores/trades'
const tradesStore = useTradesStore()

const props = defineProps({
  tradeIdx: Number,
})

const trade = computed(() => tradesStore.trades[props.tradeIdx])
</script>

<style lang="scss" scoped></style>
