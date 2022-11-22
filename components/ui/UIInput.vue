<template>
	<input
		v-model="value"
		class="input"
		@change="$emit('change-value', value)"
	/>
</template>

<script setup lang="ts">
const value = ref('');
defineEmits(['change-value']);
</script>
