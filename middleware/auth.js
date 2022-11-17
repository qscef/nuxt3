export default defineNuxtRouteMiddleware((to, from) => {
    const isAuthenticated = () => {
        return true
    }

    if (isAuthenticated() === false) {
        // alert('авторизуйтесь')
        return navigateTo({name: 'index'})
    }
})

