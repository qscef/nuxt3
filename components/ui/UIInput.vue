<template>
  <input v-model="value" class="input" @change="$emit('change-value', value)" />
</template>

<script setup>
defineEmits(["change-value"]);
const value = ref("");
</script>
