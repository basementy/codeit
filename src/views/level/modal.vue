<template>
  <div class="modal-wrapper" v-if="open">
    <div class="modal-wrapper--content">
      <div class="content--strong">Game Over</div>
      <div class="content--light">Você perdeu todas as suas tentativas, tente novamente.</div>
      <Button title="Voltar aos levels" @click="onGoToLevels" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import Button from '@/components/Button.vue';

export default {
  name: 'Modal',

  props: {
    open: Boolean,
  },

  components: {
    Button,
  },

  computed: {
    ...mapState(['currentLevel']),
  },

  methods: {
    ...mapActions(['resetLevelState']),

    onGoToLevels() {
      this.resetLevelState(this.currentLevel);
      this.$router.replace({ name: 'levels' });
    },
  },
};
</script>

<style scoped lang="scss">
.modal-wrapper {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: #080525ce;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  &--content {
    width: 100%;
    max-width: 330px;
    padding: 18px;
    background: #230D5B;
    border-radius: 4px;
    color: #6A37EC;

    .content--strong {
      font-weight: 600;
      font-size: 24px;
      margin-bottom: 5px;
    }

    .content--light {
      font-size: 16px;
      margin-bottom: 25px;
    }
  }
}
</style>
