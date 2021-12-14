<template>
  <div class="home">
    <component v-for="c in defaultSetting" :key="c.id" :is="c.name" :propsValue="c.propsValue" :styles="c.styles"></component>
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
            value: '第一个input'
          },
          styles:{
            color:'red'
          }

        },
        {
          name: 'Input',
          id:'2',
          propsValue: {
            value: '第二个input'
          },
          styles:{
            color:'red'
          }

        }
      ]
    };
  }
};
</script>
