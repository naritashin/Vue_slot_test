<template>
  <div v-if="bool">
    Paragraph contents
    <slot name="para">{{ bool }}</slot>
  </div>
  <p v-else>Paragraph Contents false</p>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    bool: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
</style>