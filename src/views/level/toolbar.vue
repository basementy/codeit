<template>
  <div class="toolbar-wrapper">
    <div class="toolbar-wrapper--icon" @click="onGoToLevels">
      <i class="fas fa-chevron-left"/>
    </div>
    <div class="toolbar-wrapper--life">
      <div
        v-for="(item, index) in lives"
        class="life--icon"
        :class="{'incomplete': hasLostLife(item)}"
        :key="index" />
    </div>
    <Modal :open="openModal" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Modal from './modal.vue';

export default {
  name: 'Toolbar',

  components: {
    Modal,
  },

  data: () => ({
    lives: Array.from({ length: 5 }, (x, y) => y + 1),
    openModal: false,
  }),

  watch: {
    userLife(value) {
      if (value === 0) {
        this.openModal = true;
      }
    },
  },

  computed: {
    ...mapState(['userLife', 'currentLevel']),
  },

  methods: {
    ...mapActions(['resetLevelState']),

    hasLostLife(value) {
      return value > this.userLife;
    },

    onGoToLevels() {
      const { name, params } = this.$route;

      if (name === 'challenge') {
        this.$router.replace({ name: 'challenges', params: { id: params.id } });
      } else {
        this.$router.replace({ name: 'levels' });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.toolbar-wrapper {
  display: grid;
  grid-template-columns: 15px 1fr 15px;
  grid-template-rows: 33px;
  justify-content: center;
  align-items: center;

  &--icon {
    color: #401C9C;
    font-size: 22px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      color: #33177a;
    }
  }

  &--life {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .life--icon {
      width: 10px;
      height: 10px;
      margin: 0px 5px;
      border-radius: 100%;
      background: #401C9C;
      border: 1px solid #401C9C;

      &.incomplete {
        background: #080525;
      }
    }

  }
}
</style>
