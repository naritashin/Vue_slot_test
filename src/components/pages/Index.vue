<template>
  <div>
    <MainArticle>
      <p slot="main">Index contents main</p>
      <p slot="main-1">Index contentsmain-1</p>
      <div slot="main-2">
        Index m2
        <p slot="main-2-1">Index m2-1</p>
      </div>
      <p slot="main-2">Index m2 v2</p>
      <p slot="main">Index main v2</p>
      <Paragraph slot="main-1" :bool="true">
        <!-- <span slot="para">false</span> -->
      </Paragraph>
      </MainArticle>
  </div>
</template>

<script>
import Paragraph from '@/components/atoms/Paragraph';
import MainArticle from '@/components/organisms/MainArticle';

export default {
  name: 'Index',
  components: { Paragraph, MainArticle }
};
</script>

<style scoped>
</style>
