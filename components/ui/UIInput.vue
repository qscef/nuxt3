<template>
    <input v-model="value" class="input" @change="$emit('change-value', value)" />
</template>

<script setup lang="ts">
defineEmits(["change-value"]);
const value = ref("");
</script>