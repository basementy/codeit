<template>
  <div>
    <div>
      <span id="title">~CodeIt</span>
      <router-link to="/teste">
        <button v-on:click="handleContinue" class="button">Continue</button>
      </router-link>
      <router-link to="/levels">
        <button class="button">Levels</button>
      </router-link>
    </div>
    <div class="footer">
      <span>
        created with <strong>coffe</strong>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped >

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

#title {
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  color: #401C9C;
  margin-top: 80%;
  margin-bottom: 60px;
}

.button {
  background: #401C9C;
  width: 237px;
  height: 58px;
  border: 0;
  border-radius: 4px;
  margin-bottom: 29px;
}

.footer {
  position: fixed;
  bottom: 0;
  color: #401C9C;
  margin-bottom: 1rem;
}

</style>
