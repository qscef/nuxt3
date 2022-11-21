export default defineNuxtRouteMiddleware(() => {
	const isAuthenticated = () => {
		return true;
	};

	if (isAuthenticated() === false) {
		// alert('авторизуйтесь')
		return navigateTo({ name: 'index' });
	}
});
