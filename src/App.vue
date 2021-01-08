<template>
  <div id="nav">
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/about">
      About
    </router-link> |
    <router-link to="/contact">
      Contact
    </router-link>
  </div>
  <router-view />
</template>

<style lang="scss">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #339989;
}

#nav {
  padding: 30px;
  font-size: 25px;

  a {
    font-weight: bold;
    color: #339989;

    &.router-link-exact-active {
      color: #2B2C28;
    }
  }
}
</style>
