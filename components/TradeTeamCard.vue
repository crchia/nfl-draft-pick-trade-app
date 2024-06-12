<template>
  <v-card style="border: 1px solid" class="py-2" variant="flat">
    <v-card-title class="d-flex justify-center">
      <team-selector
        v-model="team"
        variant="outlined"
        :clearable="isNewTrade"
        :label="`Team ${teamNum}`"
      />
    </v-card-title>
    <v-card-text v-if="team" class="mt-3">
      <v-item-group multiple v-model="selectedPicks">
        <v-row
          v-for="pick in teamPicks"
          :key="pick.pick"
          dense
          justify="center"
        >
          <v-col cols="auto">
            <v-item v-slot="{ isSelected, toggle }" :value="pick">
              <v-card
                variant="tonal"
                width="200"
                :color="isSelected ? 'green' : ''"
                @click="toggle"
              >
                <v-card-text class="pa-1 d-flex align-center">
                  <v-sheet
                    color="background"
                    rounded="lg"
                    height="40"
                    width="40"
                    class="d-flex align-center justify-center mr-2"
                  >
                    {{ pick.pick }}
                  </v-sheet>
                  <span
                    >R{{
                      rounds.find(
                        (r) => r.first <= pick.pick && r.last >= pick.pick
                      ).round
                    }}</span
                  >
                  <v-chip size="small" class="ml-auto"
                    >{{ pick.value }} EV</v-chip
                  >
                </v-card-text>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { rounds } from '~/data'
import { picks } from '~/data/pick-value'
import { useTradesStore } from '~~/stores/trades'
const tradesStore = useTradesStore()

const props = defineProps({
  teamNum: Number,
  curTeam: String,
  curSelectedPicks: Array,
  isNewTrade: {
    type: Boolean,
    default: true
  }
})

const team = ref(props.curTeam)
const selectedPicks = ref(props.curSelectedPicks)

const teamPicks = computed(() => {
  if (!team.value) return []
  return picks.filter((p) => p.team === team.value)
})

const emit = defineEmits(['update:team', 'update:selectedPicks'])

watch(team, () => {
  selectedPicks.value = []
  emit('update:team', team.value)
})

watch(selectedPicks, () => {
  emit('update:selectedPicks', selectedPicks.value)
})
</script>

<style lang="scss" scoped></style>
