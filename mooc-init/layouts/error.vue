<template>
  <div class="wrapper">
    <h1 v-if="error.statusCode === 404">PAGE NOT FOUND</h1>
    <h1 v-if="error.statusCode === 500">Error Code 500</h1>
    <h1 v-else>ERROR OCCURRED</h1>
    <NuxtLink to="/">BACK HOME</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  layout: 'error', // you can set a custom layout for the error page
}
</script>
<style lang="scss" scoped>
.wrapper {
  min-height: calc(100vh - $nav-height);
  text-align: center;
}
// @media all and (max-width: $sm) {
//   .wrapper {
//     min-height: calc(100vh - $nav-height-mobile);
//   }
// }
</style>
