<template>
  <div>
    <slot name="main">m contents</slot>
    <slot name="main-1" />
    <slot name="main-2">
      m2 contents>
      <slot name="main-2-1">m2-1contents</slot>
    </slot>
    <slot name="main-2 main2-3">m2 m2-3</slot>
    <slot name="main-3" :value="'valueText'"/>
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