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
import { mapActions, mapState } from 'vuex';

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

  created() {
    this.loadGameLevels();

    if (this.currentLevel) {
      this.setGameLevel(this.currentLevel);
    } else {
      this.setGameLevel(1);
    }
  },

  computed: {
    ...mapState(['currentLevel']),
  },

  methods: {
    ...mapActions(['loadGameLevels', 'setGameLevel']),
  },
};
</script>

<style lang="scss" scoped>
.levels-wrapper {
  height: 100vh;
  padding: 30px;

  &--content {
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
