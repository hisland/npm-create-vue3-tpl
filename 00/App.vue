<script setup lang="ts">
import { produce } from 'immer'

const aa = produce((draft) => {
  console.log('draft: ', draft)
  draft.cc = 's'
})

console.log(aa({ bb: 1 }))
</script>
<template>
  <div>123</div>
</template>
<style scoped></style>
