<i18n lang="yaml">
en:
  hello: "Hello World!"
es:
  hello: "¡Hola Mundo!"
</i18n>

<template>
  <div>
    <b-navbar type="dark" variant="info" fixed="top">

      <b-navbar-brand :to="localePath('/')">
        <b-icon icon="box-seam"></b-icon>{{ $t('hello') }}
      </b-navbar-brand>
      
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <LangSwitcher />
        </b-nav-item>
        <b-nav-item>
          <b-button variant="outline-light" size="sm" v-b-toggle.sidebar-1>
            <b-icon icon="chevron-bar-down"></b-icon>
          </b-button>
        </b-nav-item>
      </b-navbar-nav>

    </b-navbar>
    <div class="main-content my-3">
      <Nuxt />
    </div>
    <b-navbar type="dark" variant="info" fixed="bottom">
      <b-navbar-nav class="mx-auto">
        <b-nav-item>
          <LangSwitcher />
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  position: relative;
  top: 4rem;
}
</style>
