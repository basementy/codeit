<template>
  <div class="options-wrapper">
    <div
      v-text="item"
      v-for="(item, index) in options"
      class="options-wrapper--button"
      :key="index"
    />
  </div>
</template>

<script>
export default {
  name: 'Options',

  data: () => ({
    options: [
      'a + b',
      'a - b',
      'a * b',
      'a / b',
    ],
  }),
};
</script>

<style scoped lang="scss">
.options-wrapper {
  width: 100%;
  max-width: 330px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  grid-gap: 20px;

  &--button {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 155px;
    height: 55px;
    font-weight: 500;
    font-size: 18px;
    line-height: 180%;
    border-radius: 3px;
    background: #230D5B;
    color: #6A37EC;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background: #1e0c4e;
    }
  }
}
</style>
