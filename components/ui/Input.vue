<template>
    <input v-model="value" class="input" @change="$emit('changeValue', value)">
</template>

<script setup>
    const value = ref('')
</script>

<style lang="scss" scoped>
</style>