<template>
  <div v-if="bool" slot="main-2">
    <!-- main-2はもちろん効かない -->
    Paragraph contents true
    <slot name="para">{{ bool }}</slot>
  </div>
  <div v-else>
    Paragraph Contents false
    {{ value + ' v2' }}
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    bool: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
</style>