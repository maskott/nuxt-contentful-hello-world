export default {
    target: 'static',
    components: true,
    modules: [
        '@nuxtjs/dotenv',
        'nuxt-i18n',
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
              }
        ],
        defaultLocale: 'en',
    },
    build: {
        extend (config, { isDev, isClient }) {
            config.node = {
                fs: 'empty'
            }
        }
    }
}
