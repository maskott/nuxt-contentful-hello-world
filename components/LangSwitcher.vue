<template>
    <b-dropdown 
      variant="outline-info"
      size="sm"
      :title="'Selected language: ' + currentLocaleName"
    >
      <template #button-content>
        <b-icon icon="globe"></b-icon> 
        <span class="text-uppercase">{{ currentLocale }}</span>
      </template>
      <b-dropdown-item
        v-for="(loc, i) in allLocales"
        :key="loc.code"
        :to="switchLocalePath(loc.code)"
        :disabled="loc.code == currentLocale"
      >
        <b-icon :icon="loc.code == currentLocale ? 'check-circle-fill' : 'circle'" aria-hidden="true"></b-icon>
        {{ loc.name }}
      </b-dropdown-item>

    </b-dropdown>
</template>

<script>
  export default {
    computed: {
        allLocales() {
          return this.$i18n.locales
        },
        currentLocale() {
          return this.$i18n.locale
        },
        currentLocaleName() {
          return this.$i18n.locales.find(el => el.code == this.currentLocale).name
        },
    },
  }
</script>