<template>
  <div class="card-wrapper">
    <div class="card-wrapper--question" v-text="challengeInformation.question" />
    <div class="card-wrapper--code">
      <pre>
      <code v-text="challengeInformation.code"/>
      </pre>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Card',

  computed: {
    ...mapGetters(['challengeInformation']),
  },
};
</script>

<style scoped lang="scss">
.card-wrapper {
  width: 100%;
  max-width: 330px;
  padding: 18px;
  margin-bottom: 50px;
  background: #230D5B;
  border-radius: 4px;
  font-size: 12px;
  line-height: 18px;
  text-align: justify;
  color: #6A37EC;

  &--question {
    margin-bottom: 18px;
  }

  &--code {
    display: flex;
    align-items: center;
    background: #080525;
    border-radius: 4px;
    padding: 12px 18px;
    font-size: 12px;
    line-height: 180%;
    font-weight: 600;

    pre {
      display: flex;
      align-items: center;
    }
  }
}
</style>
