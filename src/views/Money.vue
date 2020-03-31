<template>
  <Layout class-prefix="layout">
    {{record}}
    <number-pad :value.sync="record.amount"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>

</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';

  type Record = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
  }

  @Component({
    components: {Tags, Notes, Types, NumberPad}
  })
  export default class Money extends Vue {
    tags = ['Cloth', 'Food', 'Home', 'Life'];
    record: Record = {
      tags: [], notes: '', type: '-', amount: 0 //Record的初始值
    };

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }
  }
</script>
<style lang="scss">
  .layout-content {
    border: 3px solid blue;
    display: flex;
    flex-direction: column-reverse;
  }

</style>
