<i18n lang="yaml">
en:
  posts: "Posts"
  posts_path: "posts"
es:
  posts: "Publicaciones"
  posts_path: "publicaciones"
</i18n>

<template>
  <b-sidebar 
    id="sidebar-1" 
    title="Sidebar" 
    bg-variant="light" 
    text-variant="info" 
    backdrop-variant="info"
    shadow 
    right 
    backdrop
  >
    <div class="px-3 py-2">
      <h2><b-icon icon="collection"></b-icon>{{ $t('posts') }}</h2>
      <ul>
          <li v-for="(p, i) in posts" :key="i">
              <strong>
                  <NuxtLink :to="localePath('/' + $t('posts_path') + '/' + p.fields.slug)">
                      {{ p.fields.title }}
                  </NuxtLink>
              </strong>
          </li>
      </ul>
    </div>
  </b-sidebar>
</template>

<script>
export default {
  props: ['posts'],
}
</script>