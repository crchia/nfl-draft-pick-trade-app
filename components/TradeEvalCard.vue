<template>
  <v-card style="border: 1px solid" class="py-2" variant="flat">
    <v-card-title class="d-flex align-center justify-center mb-2">
      <v-icon size="small" class="mr-1">mdi-scale-balance</v-icon>
      Evaluation
    </v-card-title>
    <v-card-text class="d-flex align-center">
      <div
        :style="`width: ${
          100 * tradesStore.team1Picks.reduce((acc, obj) => acc + obj.value, 0)
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
          100 * tradesStore.team2Picks.reduce((acc, obj) => acc + obj.value, 0)
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
        Package 1 =
        {{
          roundExact(
            (100 *
              tradesStore.team1Picks.reduce((acc, obj) => acc + obj.value, 0)) /
              tradesStore.team2Picks.reduce((acc, obj) => acc + obj.value, 0),
            0
          )
        }}% of Package 2
      </div>
      <div>
        Package 2 =
        {{
          roundExact(
            (100 *
              tradesStore.team2Picks.reduce((acc, obj) => acc + obj.value, 0)) /
              tradesStore.team1Picks.reduce((acc, obj) => acc + obj.value, 0),
            0
          )
        }}% of Package 1
      </div>
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success" prepend-icon="mdi-check">Save Trade</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useTradesStore } from '~~/stores/trades'
const tradesStore = useTradesStore()
import { roundExact } from '~/helpers'
</script>

<style lang="scss" scoped></style>
