<i18n lang="yaml">
en:
  links: "Links"
  posts: "Posts"
es:
  links: "Enlaces"
  posts: "Publicaciones"
</i18n>

<template>
    <div>
        <b-container class="home">
            <b-row>
                <b-col>
                    <h1><b-icon icon="house"></b-icon>Hello Repo</h1>
                    <p>Welcome to the test site! Stand back while I trigger a build.</p>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <h2><b-icon icon="collection"></b-icon>{{ $t('posts') }}</h2>
                    <ul>
                        <li v-for="(p, i) in posts" :key="i">
                            <strong>
                                <NuxtLink :to="localePath('/posts/' + p.fields.slug)">
                                    {{ p.fields.title }}
                                </NuxtLink>
                            </strong>
                        </li>
                    </ul>
                </b-col>
                <b-col>
                    <h2><b-icon icon="link45deg"></b-icon>{{ $t('links') }}</h2>
                    <ul>
                        <li v-for="(l, i) in links" :key="i">
                            <strong>
                                <a :href="l.fields.url" target="_blank">
                                    {{ l.fields.title }}
                                </a>
                            </strong>
                            <p>{{ l.fields.description }}</p>
                        </li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>
        <SideBar :posts="posts"></SideBar>
    </div>
</template>

<script>
import client from '~/plugins/contentful.js'

export default {
    asyncData({app}) {
        return Promise.all([
            client.getEntries({
                'content_type': 'links',
                'locale': app.i18n.locale
            }),
            client.getEntries({
                'content_type': 'post',
                'locale': app.i18n.locale
            }),
        ]).then(([links, posts]) => {
            return {
                links: links.items,
                posts: posts.items
            }
        }).catch(console.error)
    },
}
</script>
