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
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  position: relative;
  top: 4rem;
}
</style>