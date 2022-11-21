<template>
	<div>
		<Head>
			<Title>{{ `Post ${id}` }}</Title>
			<Meta name="description" content="post" />
		</Head>

		<Button
			v-if="!comments.length"
			text="Загрзуить комменты"
			@btn-click="loadInfo()"
		/>

		<div v-for="comment in comments" :key="comment.id" class="comment">
			<h3>{{ comment.email }}</h3>
			<div>{{ comment.body }}</div>
		</div>
		<div class="additional-info">
			post page with id {{ id }} user name = {{ userStore.name }}
		</div>
	</div>
</template>

<script setup lang="ts">
import Button from '~~/components/ui/UIButton.vue';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
const route = useRoute();
const id = ref('');
if (!Array.isArray(route.params.id)) {
	id.value = route.params.id || '';
}

definePageMeta({
	layout: 'post',
	middleware: 'auth',
});

const runtimeConfig = useRuntimeConfig();

const comments: { id: string; email: string; body: string }[] = reactive([]);
const loadInfo = async () => {
	const { data } = await useFetch<
		{ id: string; email: string; body: string }[]
	>(runtimeConfig.public.apiBase + `/posts/${id.value}/comments`);
	if (Array.isArray(data.value)) {
		data.value.forEach(comment => {
			comments.push({
				id: comment.id,
				email: comment.email,
				body: comment.body,
			});
		});
	}
};
</script>

<style lang="scss" scoped>
.additional-info {
	color: grey;
	margin-top: 20px;
}
</style>
