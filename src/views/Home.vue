<template>
  <div class="home">
    <component 
    v-for="c in defaultSetting" 
    :key="c.id" 
    :is="c.name" 
    :propsValue="c.propsValue" 
    :styles="c.styles"
    ></component>
  </div>
</template>

<script>
// @ is an alias to /src
import Input from '../components/Input';

export default {
  name: 'Home',
  components: {
    Input
  },
  data() {
    return {
      defaultSetting: [
        {
          name: 'Input',
          id:'1',
          propsValue: {
            value: '',
            placeholder:'占位',
            disabled:true,
            resize:'none',
            label:'名称',
            type:'textarea',
            clearable:false,
            size:'medium'

          },
          styles:{
            color:'red'
          },
        },
        {
          name: 'Input',
          id:'2',
          propsValue: {
            value: '',
            placeholder:'占位',
            disabled:false,
            resize:'vertical',
            label:'条件',
            type:'text',
            clearable:true,
            size:'medium'
          },
          styles:{
            color:'red'
          },
        }
      ]
    };
  },
  mounted() {
    console.log(this.defaultSetting);
  },
};
</script>
