<template>
  <div class="home">
    <component v-for="c in defaultSetting"
               :key="c.id" :is="c.name"
               :propsValue="c.propsValue"
               :position="c.position"
               :events="c.events"
               :styles="c.styles"></component>
  </div>
</template>

<script>
// @ is an alias to /src
import Input from '../components/Input';
import Table from '../components/Table';
import Radio from '../components/Radio';
import Checkbox from '../components/Checkbox';
import InputNumber from '../components/InputNumber';
import defaultSetting from '../assets/example';

export default {
  name: 'Home',
  components: {
    Input, Table, Radio, Checkbox, InputNumber
  },
  data() {
    return {
      defaultSetting,
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
