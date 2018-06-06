<template>
  <div>
    <slot name="main">Index contents</slot>
    <slot name="main-1" />
    <slot name="main-2">
      m2 contents>
      <slot name="main-2-1">m2-1contents</slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'MainArticle'
};
</script>

<style scoped>
div {
  background: #eee;
}
</style>