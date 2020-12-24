<template>
    <div class="post">
        <h2>
            {{ post.fields.title[lang] }}
        </h2>
        <rtr :document="post.fields.body[lang]" />
        <hr />
        <LangSwitcher />
    </div>
</template>

<script>
import client from '~/plugins/contentful.js'
import richTextRenderer from 'contentful-rich-text-vue-renderer';

export default {
    components: {
        rtr: richTextRenderer,
    },
    asyncData({env, params}) {
        return Promise.all([
            client.getEntries({
                'content_type': 'post',
                'fields.slug': params.slug,
                'locale': '*'
            }),
        ]).then((response) => {
            return {
                post: response[0].items[0]
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