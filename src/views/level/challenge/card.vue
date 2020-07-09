<template>
  <div class="card-wrapper">
    <div class="card-wrapper--question" v-text="level.question" />
    <div class="card-wrapper--code">
      <pre>
      <code>
        function sum(a, b) {
          return a + b;
        }
      </code>
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  data: () => ({
    level: {
      question: 'Lorem ipsum dolor aaaaaaaaaaaaaaa Lorem ipsum dolor aaaaaaaaaaaaaaa Lorem ipsum dolor aaaaaaaaaaaaaaa Lorem ipsum dolor aaaaaaaaaaaaaaa',
    },
  }),
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

    pre {
      display: flex;
      align-items: center;
    }
  }
}
</style>
