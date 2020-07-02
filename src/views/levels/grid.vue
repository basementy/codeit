<template>
  <div class="grid-wrapper">
    <div
      v-for="(level, index) in levels"
      v-text="level.id"
      class="grid-wrapper--item"
      :key="index"
      :class="{
        'grid-wrapper--item-blocked': !level.open,
        'grid-wrapper--item-completed': level.completed
      }"
      @click="onChangeLevel(level)"
    />
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex';

import Vue from 'vue';

export default Vue.extend({
  name: 'Grid',

  computed: {
    ...mapState(['levels']),
  },

  methods: {
    ...mapActions(['setGameLevel']),

    onChangeLevel({ open, id }: { open: boolean; id: number}) {
      if (open) this.setGameLevel(id);
    },
  },
});
</script>

<style lang="scss" scoped>
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 70px);
  grid-template-rows: repeat(3, 70px);
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
    cursor: pointer;
    user-select: none;

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
