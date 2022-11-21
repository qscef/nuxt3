// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Test App',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'My amazing site.' }
            ],
            bodyAttrs: {
                style: 'margin: 0'
            },
            noscript: [
                { children: 'Javascript is required' }
            ]
        }
    },
    runtimeConfig: {
        public: {
            apiBase: process.env.APP_API_URL
        }
    },
    typescript: {
        strict: true
    },
    buildModules: ['@pinia/nuxt'],
})
