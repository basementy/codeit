<template>
  <div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Levels extends Vue {
  @Prop({ type: String }) private example?: string;
}
</script>
