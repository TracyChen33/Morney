<template>
  <div>
    <label class="notes">
      <span class="name">Remark</span>
      <input type="text"
             v-model="value"
             placeholder="enter the remark">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue {
    value = '';
  }
</script>

<style lang="scss" scoped>
  .notes {
    padding-left: 16px;
    font-size: 14px;
    background: #f5f5f5;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;
    }

    input {
      height: 64px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }

</style>