<template>
  <v-btn
    color="primary"
    size="small"
    rounded="lg"
    variant="outlined"
    prepend-icon="mdi-theme-light-dark"
    @click="isDark = !isDark"
  >
    {{ isDark ? 'Dark' : 'Light' }} Mode
  </v-btn>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = ref(true)

const activateTheme = () => {
  theme.global.name.value = isDark.value ? 'dark' : 'light'
}

activateTheme()

watch(isDark, () => {
  activateTheme()
})
</script>

<style scoped></style>
