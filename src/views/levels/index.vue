<template>
  <div class="levels-wrapper">
    <Toolbar />
    <div class="levels-wrapper--content">
      <Grid />
      <Card />
    </div>
  </div>
</template>

<script>

import Card from './card.vue';
import Grid from './grid.vue';
import Toolbar from './toolbar.vue';

export default {
  name: 'Levels',

  components: {
    Card,
    Grid,
    Toolbar,
  },
};
</script>

<style lang="scss" scoped>
.levels-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 25px;

  &--content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
