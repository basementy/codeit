<template>
  <div class="card-wrapper">
    <div class="card-wrapper--content" v-if="levelInformation">
      <div class="content--title">Level: {{ levelInformation.title }}</div>
      <div class="content--description" v-text="levelInformation.description" />
    </div>
    <Button extra title="Start Level" @click="onGoToLevel" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Button from '@/components/Button.vue';

export default {
  name: 'Card',

  components: {
    Button,
  },

  computed: {
    ...mapGetters(['levelInformation']),
  },

  methods: {
    onGoToLevel() {
      this.$router.replace({
        name: 'challenges',
        params: { id: this.levelInformation.id.toString() },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  width: 100%;
  height: auto;
  max-width: 332px;
  max-height: 287px;
  padding: 20px;
  background: #230D5B;
  border-radius: 4px;
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card-wrapper--content {
    .content--title {
      font-weight: 600;
      font-size: 18px;
      color: #6A37EC;
      margin-bottom: 6px;

      @media only screen and (max-height: 640px){
        margin-bottom: 24px;
      }
    }

    .content--description {
      font-size: 12px;
      line-height: 18px;
      color: #6A37EC;
      margin-bottom: 36px;

      @media only screen and (max-height: 640px){
        display: none;
      }
    }
  }

}
</style>
