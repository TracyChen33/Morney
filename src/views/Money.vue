<template>
  <Layout class-prefix="layout">
    <number-pad/>
    <Types/>
    <Notes/>
    <Tags :data-source.sync="tags"/>
  </Layout>

</template>

<script >
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';

  export default {
    name: 'Money',
    components: {Tags, Notes, Types, NumberPad},
    data(){
      return{
        tags:['Cloth','Food','Home','Life'],
      }
    }

  };
</script>
<style lang="scss">
  .layout-content {
    border: 3px solid blue;
    display: flex;
    flex-direction: column-reverse;
  }

</style>
