<template>
  <div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Level extends Vue {
  @Prop({ type: String }) private example?: string;
}
</script>
