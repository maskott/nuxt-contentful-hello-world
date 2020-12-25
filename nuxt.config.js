export default {
    target: 'static',
    components: true,
    modules: [
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
    env: {
        CTF_SPACE_ID: process.env.CTF_SPACE_ID,
        CTF_CD_ACCESS_TOKEN: process.env.CTF_CD_ACCESS_TOKEN,
    },
    build: {
        extend (config, { isDev, isClient }) {
            config.node = {
                fs: 'empty'
            }
        }
    }
}
