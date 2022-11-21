<template>
	<div>
		<div class="header">
			header for posts
			<NuxtLink to="/">return</NuxtLink>
		</div>
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.header {
	position: sticky;
	top: 0;
	width: 100%;
	height: 50px;
	text-align: center;
	background-color: aquamarine;
}
</style>
