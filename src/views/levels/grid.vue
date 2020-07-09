<template>
  <div class="grid-wrapper">
    <div
      v-for="(level, index) in levels"
      v-text="level.id"
      class="grid-wrapper--item"
      :key="index"
      :class="{
        'grid-wrapper--item-blocked': !isUnblocked(index),
        'grid-wrapper--item-completed': level.completed
      }"
      @click="onChangeLevel(index, level.id)"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Grid',

  computed: {
    ...mapState(['levels']),
  },

  methods: {
    ...mapActions(['setGameLevel']),

    isUnblocked(index) {
      if (index === 0) {
        return true;
      }

      const previousLevel = this.levels[index - 1];
      return !!previousLevel.completed;
    },

    onChangeLevel(index, id) {
      if (this.isUnblocked(index)) this.setGameLevel(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 70px);
  grid-template-rows: repeat(2, 70px);
  grid-column-gap: 38px;
  grid-row-gap: 38px;

  &--item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border: 2px solid #401C9C;
    border-radius: 3px;
    font-weight: 500;
    font-size: 24px;
    color: #401C9C;
    transition: 0.3s;
    user-select: none;
    cursor: pointer;

    &-completed {
      background: #401C9C;
      color: #080525;
    }

    &-blocked {
      opacity: 0.4;
      cursor: not-allowed;
    }

    &:hover {
      color: #080525;
      background: #321679;
      border: 2px solid #321679;
    }
  }
}
</style>
