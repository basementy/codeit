<template>
  <div
    v-text="title"
    class="button-wrapper"
    :class="{
      'button-wrapper--extra': extra,
      'button-wrapper--disabled': disabled
    }"
    @click="$emit('click')"
  />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Button',

  props: {
    title: String,
    extra: Boolean,
    disabled: Boolean,
  },
});
</script>

<style scoped lang="scss">
.button-wrapper {
  width: 100%;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #401C9C;
  color: #080525;
  font-size: 18px;
  font-weight: 800;
  transition: 0.3s;
  user-select: none;
  cursor: pointer;

  &--extra {
    height: 75px;
    font-weight: 600;
    font-size: 24px;
  }

  &--disabled {
    cursor: not-allowed;
    background: #401c9c5b;

    &:hover {
      background: #401c9c5b !important;
    }
  }

  &:hover {
    background: #33177c;
  }
}
</style>
