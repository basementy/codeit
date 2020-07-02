<template>
  <div class="toolbar-wrapper">
    <div class="toolbar-wrapper--icon" @click="goToMenu">
      <i class="fas fa-chevron-left"/>
    </div>
    <div class="toolbar-wrapper--title">Levels</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Toolbar',

  methods: {
    goToMenu() {
      this.$router.replace({ name: 'menu' });
    },
  },
});
</script>

<style lang="scss" scoped>
.toolbar-wrapper {
  width: 100%;
  display: grid;
  margin: auto;
  grid-template-columns: 15px 1fr 15px;
  color: #401C9C;
  font-size: 18px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  &--icon {
    cursor: pointer;
    font-size: 22px;

    &:hover {
      color: #351781;
    }
  }
}
</style>
