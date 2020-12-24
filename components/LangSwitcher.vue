<template>
    <ul>
        <li 
            v-for="locale in availableLocales"
            :key="locale.code"
        >
            <nuxt-link :to="switchLocalePath(locale.code)" v-if="locale.code != currentLocale">
              {{ locale.name }}
            </nuxt-link>
            <strong v-else>
              {{ locale.name }}
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