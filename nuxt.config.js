export default {
    target: 'static',
    modules: [
        '@nuxtjs/dotenv',
    ],
    build: {
        extend (config, { isDev, isClient }) {
            config.node = {
                fs: 'empty'
            }
        }
    }
}
