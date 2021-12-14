<template>
  <el-input v-model="propsValue.value"
  :placeholder="propsValue.placeholder"
  :disabled="propsValue.disabled"
  :resize="propsValue.resize"
  :label="propsValue.label"
  :type="propsValue.type"
  :clearable="propsValue.clearable"
  :size="propsValue.size"
  ></el-input>
</template>

<script>
export default {
  name: "Input",
  props:{
    propsValue:{
      type:Object,
      default:{
        value:'文本框',
        placeholder:'占位符',
        disabled:'禁用',
        resize:'缩放',
        // 输入框关联的文字
        label:'名称',
        // 类型
        type:'text',
        //是否可清空  
        clearable:true,
        //输入框尺寸
        size:'medium',
      }
    }
  }
};
</script>

<style scoped>

</style>
