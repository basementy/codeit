<template>
  <div class="challenges-wrapper">
    <div
      v-for="(item, index) in levelInformation.challenges"
      class="challenges-wrapper--challenge"
      :key="index"
    >
      <div
        class="challenge-container"
        :class="{
          'challenge-completed': item.completed,
          'challenge-unblocked': isUnblocked(index)
        }"
        @click="onGoToChallenge(item, index)"
      >
        <div class="challenge-container--circle" />
      </div>
      <div class="challenge-line" v-if="!isLastChallenge(index)" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Challenges',

  props: {
    id: String,
  },

  created() {
    this.setCurrentLevel(parseInt(this.id, 0));
  },

  computed: {
    ...mapGetters(['levelInformation']),
  },

  methods: {
    ...mapActions(['setCurrentLevel']),

    isLastChallenge(index) {
      return index + 1 === this.levelInformation.challenges?.length;
    },

    isUnblocked(index) {
      const previousChallenge = this.levelInformation.challenges[index - 1];

      if (index === 0) {
        return true;
      }

      return !!previousChallenge.completed;
    },

    onGoToChallenge(challenge, index) {
      const { id, completed } = challenge;

      if (this.isUnblocked(index) && !completed) {
        this.$router.replace({
          name: 'challenge',
          params: {
            id: this.id,
            challenge: id.toString(),
          },
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.challenges-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &--challenge {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .challenge-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 47px;
      height: 47px;
      background: #080525;
      border: 2px solid #401C9C;
      border-radius: 50%;
      transition: 0.3s;
      opacity: 0.3;
      cursor: not-allowed;

      &--circle {
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background: #401C9C;
      }
    }

    .challenge-unblocked {
      opacity: 0.6;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }

    .challenge-completed {
      opacity: 0.7;
      background: #401C9C;

      &:hover {
        opacity: 1;
      }
    }

    .challenge-line {
      width: 3px;
      height: 57px;
      background: #230D5B;
      opacity: 0.3;
    }
  }
}
</style>
