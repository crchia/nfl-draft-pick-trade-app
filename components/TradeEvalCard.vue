<template>
  <v-card style="border: 1px solid" class="py-2" variant="flat">
    <v-card-title class="d-flex align-center justify-center mb-2">
      <v-icon size="small" class="mr-1">mdi-scale-balance</v-icon>
      Evaluation
    </v-card-title>
    <v-card-text class="d-flex align-center">
      <div
        :style="`width: ${
          100 * team1Picks.reduce((acc, obj) => acc + obj.value, 0)
        }%`"
      >
        <v-progress-linear :model-value="100" rounded height="15">
        </v-progress-linear>
      </div>
      <div>
        <v-icon>mdi-lightning-bolt</v-icon>
      </div>
      <div
        :style="`width: ${
          100 * team2Picks.reduce((acc, obj) => acc + obj.value, 0)
        }%`"
      >
        <v-progress-linear
          :model-value="100"
          rounded
          height="15"
        ></v-progress-linear>
      </div>
    </v-card-text>
    <v-card-title class="text-center">
      <div>
        <v-icon>mdi-numeric-1-box</v-icon> =
        {{
          roundExact(
            (100 *
              team1Picks.reduce((acc, obj) => acc + obj.value, 0)) /
              team2Picks.reduce((acc, obj) => acc + obj.value, 0),
            0
          )
        }}% of <v-icon>mdi-numeric-2-box</v-icon>
      </div>
      <div>
        <v-icon>mdi-numeric-2-box</v-icon> =
        {{
          roundExact(
            (100 *
              team2Picks.reduce((acc, obj) => acc + obj.value, 0)) /
              team1Picks.reduce((acc, obj) => acc + obj.value, 0),
            0
          )
        }}% of <v-icon>mdi-numeric-1-box</v-icon>
      </div>
    </v-card-title>
    <v-card-actions v-if="tradeIdx === -1">
      <v-spacer></v-spacer>
      <v-btn color="success" prepend-icon="mdi-check" @click="saveTrade">{{
        saveText
      }}</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { roundExact } from '~/helpers'
import { useTradesStore } from '~~/stores/trades'
const tradesStore = useTradesStore()

const props = defineProps({
  team1Picks: Array,
  team2Picks: Array,
  tradeIdx: {
    type: Number,
    default: -1,
  }
})

const saveText = ref('Save Trade')

const saveTrade = async () => {
  tradesStore.saveTrade()
  saveText.value = 'Saved!'
  setTimeout(() => {
    saveText.value = 'Save Trade'
  }, 1500)
}
</script>

<style lang="scss" scoped></style>
