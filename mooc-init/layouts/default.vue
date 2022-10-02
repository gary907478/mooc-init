<template>
  <div>
    <MainNav />
    <div class="spacer"></div>
    <Nuxt />
    <MainFooter />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss" scoped>
.spacer {
  height: $nav-height;
  width: 100%;
  background-color: #fff;
}
</style>
