<template>
  <div class="menu-wrapper">
    <div class="menu-wrapper__content">
      <div class="content--title">
        ~ code<span>it</span>
      </div>
      <div class="content--buttons">
        <Button
          title="Continue"
          class="content--buttons__margin"
          :disabled="!currentLevel"
          @click="goToLevel"
        />
        <Button title="Levels" @click="goToLevels"/>
      </div>
    </div>
    <div class="menu-wrapper__detail">
      created with <span>coffe</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Button from '@/components/Button.vue';

export default {
  components: {
    Button,
  },

  computed: {
    ...mapState(['currentLevel']),
  },

  methods: {
    goToLevel() {
      this.$router.replace({ name: 'challenges', params: { id: this.currentLevel } });
    },

    goToLevels() {
      this.$router.replace({ name: 'levels' });
    },
  },
};
</script>

<style scoped lang="scss">
.menu-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    width: 100%;
    max-width: 237px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .content--title {
      width: 100%;
      text-align: left;
      margin-bottom: 60px;
      font-size: 48px;
      font-weight: 700;
      color: #401C9C;

      span {
        font-weight: 500;
        color: #230D5B;
      }
    }

    .content--buttons {
      width: 100%;

      &__margin {
        margin-bottom: 30px;
      }
    }
  }

  &__detail {
    position: absolute;
    bottom: 35px;
    color: #401C9C;
    font-weight: 500;

    span {
      font-weight: 700;
    }
  }
}
</style>
