<template>
	<NuxtLayout>
		<div class="notifi">notifications</div>
		<NuxtPage />
	</NuxtLayout>
</template>

<style lang="scss" scoped>
.notifi {
	position: fixed;
	bottom: 10px;
	right: 10px;
	max-width: 400px;
	background-color: rgb(234, 152, 152);
	border: 1px solid red;
	padding: 10px 40px;
	border-radius: 5px;
}
</style>
