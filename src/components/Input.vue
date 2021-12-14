<template>
  <el-input v-model="propsValue.value" :style="{...styles,...position}" style="position: absolute"></el-input>
</template>

<script>
export default {
  name: "Input",
  props: {
    propsValue: {
      type: Object,
      default: {
        value: '文本框'
      }
    },
    styles: {
      type: Object,
      default: {
        width: '200px',
        height: '80px'
      }
    },
    position: {
      type: Object,
      default: {
        left: '',
        right: '',
        top: '',
        bottom: ''
      }
    }
  }
};
</script>

<style scoped>

</style>
