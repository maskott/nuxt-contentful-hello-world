<template>
    <div>
        <b-container class="post">
            <h2>
                {{ post.title[lang] }}
            </h2>
            <rtr :document="post.body[lang]" />
            <hr />
            <LangSwitcher />
        </b-container>
        <SideBar :posts="posts"></SideBar>
    </div>
</template>

<script>
import client from '~/plugins/contentful.js'
import richTextRenderer from 'contentful-rich-text-vue-renderer';

export default {
    nuxtI18n: {
        paths: {
            en: '/posts/:slug',
            es: '/publicaciones/:slug'
        }
    },
    components: {
        rtr: richTextRenderer,
    },
    asyncData({app, env, store, params}) {
        return Promise.all([
            client.getEntries({
                'content_type': 'post',
                ['fields.slug.' + app.i18n.locale]: params.slug,
                'locale': "*"
            }),
            client.getEntries({
                'content_type': 'post',
                'locale': app.i18n.locale
            }),
        ]).then(([post, posts]) => {
            store.dispatch('i18n/setRouteParams', {
                en: { slug: post.items[0].fields.slug.en },
                es: { slug: post.items[0].fields.slug.es }
            })
            return {
                post: post.items[0].fields,
                posts: posts.items,
            }
        }).catch(console.error)
    },
    computed: {
        lang () {
            return this.$i18n.locale
        }
    },
}
</script>