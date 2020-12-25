<template>
  <div>
    <h1>📦 Hello world!</h1>
    <nav>
      <ul>
        <li>
          <NuxtLink :to="localePath('/')">
            Home
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <Nuxt />
  </div>
</template>