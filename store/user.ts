import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
	const name = ref('');

	const getName = computed(() => name);

	const setName = (newName: string) => {
		name.value = newName;
	};

	return { name, getName, setName };
});
