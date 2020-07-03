<template>
  <div>
    <div class="task">
      <span class="incomplete" />
    </div>
    <div class="task">
      <span class="progress" />
    </div>
    <div class="task">
      <span class="complete" />
    </div>
    <div class="task">
      <span class="complete" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Level',

  props: {
    id: String,
  },
};
</script>

<style scoped>
div{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.task {
  position: relative;
  border: 2px solid #401C9C;
  border-radius: 100%;
  width: 47px;
  height: 47px;
  line-height: 50px;
  text-align: center;
  margin-top: 50px;
}

.task:first-child {
  margin-top: 5%;
  }

.task:before {
  position: absolute;
  border: 1px solid #401C9C;
  width: 0; height: 50px;
  display: block;
  content: '';
  left: 50%;
  z-index: 1;
  top: -54px;
  margin-left: -1px;
  }

.task:first-child:before {
  display: none;
  }

.task .complete {
  position: absolute;
  width: 43px;
  height: 43px;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  display: inline-block;

  background: #401C9C;
  box-sizing: border-box;
}

.task .progress {
  position: absolute;
  width: 35px;
  height: 35px;
  left: 4px;
  top: 4px;
  border-radius: 50%;

  background: #401C9C;
  box-sizing: border-box;
}

.task .incomplete {
  position: absolute;
  width: 11px;
  height: 11px;
  left: 16px;
  top: 16px;
  border-radius: 50%;

  background: #401C9C;
  box-sizing: border-box;
}

</style>
