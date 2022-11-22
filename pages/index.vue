<template>
	<div>
		<div class="modal">
			<img src="~/assets/images/logo.webp"/>
			<h2>Авторизуйтесь</h2>
			<Input @change-value="user = $event" />
			<Button text="Запомнить меня" @btn-click="authorization()" />
		</div>
		<div class="links">
			<NuxtLink to="/posts">Posts</NuxtLink>
			<NuxtLink to="/about">About</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import Button from '~~/components/ui/UIButton.vue';
import Input from '~~/components/ui/UIInput.vue';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

const user = ref('');

const authorization = () => {
	userStore.setName(user.value);
};
</script>

<style lang="scss" scoped>
.modal {
	display: flex;
	flex-direction: column;
	width: 300px;
	margin: auto;
	gap: 20px;
}
.links {
	margin-top: 50px;
	display: flex;
	justify-content: center;
	gap: 40px;
}
</style>
