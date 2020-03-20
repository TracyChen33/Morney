<template>
  <Layout>
    <div class="tags">
      <ul class="'current">
        <li>Cloth</li>
        <li>Food</li>
        <li>Home</li>
        <li>Life</li>
      </ul>
      <div class="new">
        <button>New Label</button>
      </div>
    </div>
    <div>
      <label class="notes">
        <span class="name">Remark</span>
        <input type="text">
      </label>
    </div>
    <div>
      <ul class="types">
        <li class="selected">Income</li>
        <li>Spend</li>
      </ul>
    </div>
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>delete</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>clear</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>OK</button>
        <button>0</button>
        <button>.</button>
      </div>
    </div>
  </Layout>

</template>

<script lang="ts">
  export default {
    name: 'Money',
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
</style>