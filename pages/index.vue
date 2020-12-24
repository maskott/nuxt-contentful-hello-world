<template>
    <div class="home">
        <h2>Links</h2>
        <ul>
            <li v-for="(l, i) in links" :key="i">
                <h3>
                    <a :href="l.fields.url.en" target="_blank">
                        {{ l.fields.title[lang] }}
                    </a>
                </h3>
                <p>{{ l.fields.description[lang] }}</p>
            </li>
        </ul>

        <h2>Posts</h2>
        <ul>
            <li v-for="(p, i) in posts" :key="i">
                <h3>
                    <NuxtLink :to="localePath('/posts/' + p.fields.slug.en)">
                        {{ p.fields.title[lang] }}
                    </NuxtLink>
                </h3>
            </li>
        </ul>

        <br />
        <hr />

        <LangSwitcher />

    </div>
</template>

<script>
import client from '~/plugins/contentful.js'

export default {
    asyncData({env}) {
        return Promise.all([
            client.getEntries({
                'content_type': 'links',
                'locale': '*'
            }),
            client.getEntries({
                'content_type': 'post',
                'locale': '*'
            }),
        ]).then(([links, posts]) => {
            return {
                links: links.items,
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
