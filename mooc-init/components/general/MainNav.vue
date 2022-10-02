<template>
  <nav>
    <div class="wrapper">
      <NuxtLink to="/">
        <img class="nav-logo" src="/icons/logo.svg" alt="navbar logo" />
      </NuxtLink>

      <div class="nav-links">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/gallery">Gallery</NuxtLink>
        <NuxtLink to="/blogs">Blogs</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNav',
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  height: $nav-height;
  width: 100%;
  background-color: #333;
  border-bottom: 1px solid #3b56a5;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
}
.nav-logo {
  height: 50px;
  width: auto;
}
.nav-links {
  a {
    color: #fff;
  }
}
</style>
