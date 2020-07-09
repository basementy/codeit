<template>
  <div class="level-wrapper">
    <Toolbar />
    <router-view></router-view>
    <Success :open="openModal" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Toolbar from './toolbar.vue';
import Success from './success.vue';

export default {
  name: 'Level',

  components: {
    Toolbar,
    Success,
  },

  props: {
    id: String,
  },

  data: () => ({
    openModal: false,
  }),

  updated() {
    if (this.hasCompleted) {
      this.openModal = true;
    }
  },

  computed: {
    ...mapGetters(['levelInformation']),

    hasCompleted() {
      return !this.levelInformation.challenges
        .some((challenge) => challenge?.completed === false);
    },
  },

  methods: {
    ...mapActions(['updateLevelStatus', 'resetLevelState']),
  },
};
</script>

<style scoped lang="scss">
.level-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
}
</style>
