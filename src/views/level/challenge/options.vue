<template>
  <div class="options-wrapper">
    <div
      v-text="item.description"
      v-for="(item, index) in challengeInformation.options"
      class="options-wrapper--button"
      :key="index"
      @click="onTryAssert(item.id)"
    />
    <Modal :open="openModal" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Modal from './modal.vue';

export default {
  name: 'Options',

  data: () => ({
    openModal: false,
    options: [
      'a + b',
      'a - b',
      'a * b',
      'a / b',
    ],
  }),

  components: {
    Modal,
  },

  computed: {
    ...mapGetters(['challengeInformation', 'levelInformation']),
  },

  methods: {
    ...mapActions(['updateChallengeStatus', 'updateUserLife']),

    onTryAssert(id) {
      if (id === this.challengeInformation.correct) {
        this.openModal = true;
      } else {
        this.updateUserLife();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.options-wrapper {
  width: 100%;
  max-width: 330px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-gap: 20px;

  &--button {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 155px;
    height: 55px;
    font-weight: 500;
    font-size: 18px;
    line-height: 180%;
    border-radius: 3px;
    background: #230D5B;
    color: #6A37EC;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background: #1e0c4e;
    }
  }
}
</style>
