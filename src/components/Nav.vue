<template>
  <div class="nav">
    <hr/>
    <div>
      <router-link to="/money">Money</router-link>
      |
      <router-link to="/labels">Label</router-link>
      |
      <router-link to="/statistics">Statistics</router-link>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  .nav{
    border: 1px solid red;
  }

</style>