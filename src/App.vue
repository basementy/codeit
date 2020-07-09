<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  created() {
    this.loadGameLevels();

    if (this.$route.path === '/') {
      this.$router.replace({ name: 'menu' });
    }

    if (this.currentLevel) {
      this.setGameLevel(this.currentLevel);
    } else {
      this.setGameLevel(1);
    }
  },

  computed: {
    ...mapState(['currentLevel']),
  },

  methods: {
    ...mapActions(['loadGameLevels', 'setGameLevel']),
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  box-sizing: border-box;
  background: #080525;
}

#app {
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
