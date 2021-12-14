<template>
  <el-input v-model="propsValue.value"></el-input>
</template>

<script>
export default {
  name: "Input",
  props:{
    propsValue:{
      type:Object,
      default:{
        value:'文本框'
      }
    }
  }
};
</script>

<style scoped>

</style>
