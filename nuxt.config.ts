// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // ssr: true,
    modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
    css: [
        '/assets/css/style.css',
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
        head: {
            htmlAttrs: {
                "data-theme": "lofi",
                lang: 'en',
                prefix: 'og: https://ogp.me/ns#',
            },
            title: 'PORTFOLIO',
            meta: [
               
            ],
            link: [
                { rel: 'icon', href: '/favicon.ico' },
                // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Sen&display=swap' }
            ],
        },
    },
})