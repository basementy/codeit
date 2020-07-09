<template>
  <div class="modal-wrapper" v-if="open">
    <div class="modal-wrapper--content">
      <div class="content--strong">Completed</div>
      <div class="content--light">Resposta correta!</div>
      <Button title="Continuar" @click="onGoToChallenges"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

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
    ...mapGetters(['challengeInformation', 'levelInformation']),
  },

  methods: {
    ...mapActions(['updateChallengeStatus', 'updateUserLife']),

    onGoToChallenges() {
      this.updateChallengeStatus(this.challengeInformation.id);
      this.$router.replace({
        name: 'challenges',
        params: { id: this.levelInformation.id.toString() },
      });
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
