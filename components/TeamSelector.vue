<template>
  <v-autocomplete
    max-width="200px"
    :items="teams"
    :label="label"
    v-model="team"
    :variant="variant"
    :clearable="clearable"
  >
    <template v-slot:item="{ props, item }">
      <v-list-item
        v-bind="props"
        :prepend-avatar="getTeamLogo(item.raw)"
        :title="item.raw"
      >
      </v-list-item>
    </template>
    <template v-slot:prepend-inner="{}">
      <v-img
        v-if="team"
        height="25"
        width="25"
        class="mr-2"
        :src="getTeamLogo(team)"
        contain
      ></v-img>
    </template>
  </v-autocomplete>
</template>

<script setup>
import { teams } from '~/data/teams'
import { getTeamLogo } from '~/helpers';

const props = defineProps({
  clearable: {
    type: Boolean,
    default: true
  },
  label: {
    type: String,
    default: 'Team'
  },
  variant: {
    type: String,
    default: 'solo',
  },
  modelValue: String,
})

const team = ref(props.modelValue)

const emit = defineEmits(['update:modelValue'])
watch(team, () => emit('update:modelValue', team.value))
</script>

<style lang="scss" scoped></style>
