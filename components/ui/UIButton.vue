<template>
	<button class="button" @click="$emit('btn-click')">
		{{ text }}
	</button>
</template>

<script setup>
defineProps({
	text: { type: String, required: true },
});
defineEmits(['btn-click']);
</script>

<style lang="scss" scoped>
.button {
	border-radius: 4px;
	outline: none;
	border: 1px solid gray;
	cursor: pointer;
	padding: 10px;
	background: white;
}
</style>
