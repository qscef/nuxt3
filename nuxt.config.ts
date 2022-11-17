// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            bodyAttrs: {
                style: 'margin: 0'
            },
            noscript: [
                { children: 'Javascript is required' }
            ]
        }
    },
})
