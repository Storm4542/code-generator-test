<template>
  <div class="home">
    <component v-for="c in defaultSetting"
               :key="c.id" :is="c.name"
               :propsValue="c.propsValue"
               :position="c.position"
               :styles="c.styles"></component>
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
          id: '1',
          propsValue: {
            value: '',
            placeholder: '占位',
            disabled: false,
            resize: 'none',
            label: '名称',
            type: 'text',
            clearable: false,
            size: 'medium',
            'show-word-limit': true,

          },
          styles: {
            color: 'red',
            width: '200px',
          },
          position: {
            left: '10px',
            right: '',
            top: '10px',
            bottom: ''
          }

        },
        {
          name: 'Input',
          id: '2',
          propsValue: {
            value: '',
            placeholder: '占位',
            disabled: false,
            resize: 'vertical',
            label: '条件',
            type: 'text',
            clearable: true,
            size: 'medium'
          },
          styles: {
            color: 'red',
            width: '200px',
          },
          position: {
            left: '400px',
            right: '',
            top: '10px',
            bottom: ''
          }

        }
      ]
    };
  },
  mounted() {
    console.log(this.defaultSetting);
  },
};
</script>
<style>
.home {
  position: relative;
}
</style>
