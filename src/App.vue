<template>
  <div id="nav">
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/play">
      Play
    </router-link> |
    <router-link to="/contact">
      Contact
    </router-link>
  </div>
  <router-view />
</template>

<style lang="scss" src="@/main.scss">
</style>
