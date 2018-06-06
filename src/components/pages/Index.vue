<template>
  <div>
    <MainArticle>
      <p slot="main">Index contents main</p>
      <p slot="main-1">Index contentsmain-1</p>
      <div slot="main-2">
        Index m2
        <p slot="main-2-1">Index m2-1</p>
      </div>
      <!-- Index m2 -->
      <p slot="main-2">Index m2 v2</p>
      <p slot="main">Index main v2</p>
      <p slot="main2-3">Index m2-3</p>
      <p slot="main2 main2-3">Index m2 m2-3</p>
      <!-- m2 m2-3 -->
      <Paragraph slot="main-1" :bool="true">
        <span slot="para">false</span>
        <!-- Paragraph contents true false -->
        <!-- slotのならびに準ずる -->
      </Paragraph>
      <p slot="main-3" slot-scope="item">{{ item.value }} v1</p>
      <!-- valueText v1 -->
      <Paragraph slot="main-3" slot-scope="content" :value="content.value" />
        <!-- valueText v2 -->
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
