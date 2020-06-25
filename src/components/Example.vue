<template>
  <div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop({ type: String }) readonly example?: string;
}
</script>

<style scoped lang="scss">
// Insert Style
</style>
