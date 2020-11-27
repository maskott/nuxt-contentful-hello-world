<template>
    <div class="home">
        <h2>Links</h2>
        <ul>
            <li v-for="(l, i) in links" :key="i">
                <h3>
                    <a href="l.fields.url" target="_blank">
                        {{ l.fields.title }}
                    </a>
                </h3>
                <p>{{ l.fields.description }}</p>
            </li>
        </ul>

        <h2>Posts</h2>
        <ul>
            <li v-for="(p, i) in posts" :key="i">
                <h3>
                    <nuxt-link :to="'/posts/' + p.fields.slug">
                        {{ p.fields.title }}
                    </nuxt-link>
                </h3>
            </li>
        </ul>
    </div>
</template>

<script>
import client from '~/plugins/contentful.js'

export default {
    asyncData({env}) {
        return Promise.all([
            client.getEntries({
                'content_type': 'links'
            }),
            client.getEntries({
                'content_type': 'post'
            }),
        ]).then(([links, posts]) => {
            return {
                links: links.items,
                posts: posts.items
            }
        }).catch(console.error)
    }
}
</script>
