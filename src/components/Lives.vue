<template>
  <div id="root">
    <div
    :class="{
      'life-full': checkLives(userLife, 1),
      'life-empty': !checkLives(userLife, 1)
      }"/>
    <div
    :class="{
      'life-full': checkLives(userLife, 2),
      'life-empty': !checkLives(userLife, 2)
      }"
    />
    <div
    :class="{
      'life-full': checkLives(userLife, 3),
      'life-empty': !checkLives(userLife, 3)
      }"
    />
    <div
    :class="{
      'life-full': checkLives(userLife, 4),
      'life-empty': !checkLives(userLife, 4)
      }"
    />
    <div
    :class="{
      'life-full': checkLives(userLife, 5),
      'life-empty': !checkLives(userLife, 5)
      }"
    />
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';

import Vue from 'vue';

export default Vue.extend({
  name: 'Lives',

  props: {
    lives: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapState(['userLife']),
  },

  methods: {
    checkLives(numberLive, actualIndex) {
      if (numberLive >= actualIndex) {
        return true;
      }
      return false;
    },
  },
});
</script>

<style scoped>
#root {
  display: -webkit-box;
  margin: 10px 100px 50px 100px;
}

.life-full {
width: 10px;
height: 10px;

margin: 5px;

border-radius: 100%;
background: #401C9C;
}

.life-empty {
width: 10px;
height: 10px;

margin: 5px;

border-radius: 100%;
border: 1.2px solid #401C9C;
}
</style>
