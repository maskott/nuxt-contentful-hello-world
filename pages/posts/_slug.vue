<template>
    <div>
        <b-container class="post">
            <h2>
                {{ post.fields.title[lang] }}
            </h2>
            <rtr :document="post.fields.body[lang]" />
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
    components: {
        rtr: richTextRenderer,
    },
    asyncData({app, env, params}) {
        return Promise.all([
            client.getEntries({
                'content_type': 'post',
                'fields.slug': params.slug,
                'locale': '*'
            }),
            client.getEntries({
                'content_type': 'post',
                'locale': app.i18n.locale
            }),
        ]).then(([post, posts]) => {
            return {
                post: post.items[0],
                posts: posts.items
            }
        }).catch(console.error)
    },
    data() {
        return {
            lang: this.$i18n.locale
        }
    },
}
</script>