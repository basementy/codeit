<template>
  <div class="challenge-wrapper">
    <Card />
    <Options />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Card from './card.vue';
import Options from './options.vue';

export default {
  name: 'Challenge',

  components: {
    Card,
    Options,
  },

  props: {
    id: String,
    challenge: String,
  },

  created() {
    this.setGameChallenge(parseInt(this.challenge, 0));
  },

  methods: {
    ...mapActions(['setGameChallenge']),
  },
};
</script>

<style scoped lang="scss">
.challenge-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
