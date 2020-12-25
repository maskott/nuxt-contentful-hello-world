<template>
    <ul>
        <li 
            v-for="locale in availableLocales"
            :key="locale.code"
        >
            <nuxt-link :to="switchLocalePath(locale.code)" v-if="locale.code != currentLocale" :title="locale.name">
              {{ locale.code }}
            </nuxt-link>
            <strong v-else :title="locale.name">
              {{ locale.code }}
            </strong>
        </li>
    </ul>
</template>

<script>
  export default {
    computed: {
        availableLocales() {
          return this.$i18n.locales
        },
        currentLocale() {
          return this.$i18n.locale
        }
    },
  }
</script>