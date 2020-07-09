<template>
  <div class="level-wrapper">
    <Toolbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Toolbar from './toolbar.vue';

export default {
  name: 'Level',

  components: {
    Toolbar,
  },

  props: {
    id: String,
  },
};
</script>

<style scoped lang="scss">
.level-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
}
</style>
