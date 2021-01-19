export default {
    target: 'static',
    components: true,
    modules: [
        'nuxt-i18n',
        'bootstrap-vue/nuxt',
    ],
    i18n: {
        locales: [
            {
                code: 'en',
                name: 'English'
            },
            {
                code: 'es',
                name: 'Español'
            },
        ],
        defaultLocale: 'en',
        vueI18nLoader: true,
    },
    env: {
        CTF_SPACE_ID: process.env.CTF_SPACE_ID,
        CTF_CD_ACCESS_TOKEN: process.env.CTF_CD_ACCESS_TOKEN,
    },
    bootstrapVue: {
        icons: true
    },
}
