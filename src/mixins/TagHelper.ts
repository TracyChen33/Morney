
import Vue from 'vue'
import Component from 'vue-class-component'


@Component
export class TagHelper extends Vue {
  createTag() {
    const name = window.prompt('please enter your Tags name');
    if (!name) {return window.alert('Tags cannot be null');}
    this.$store.commit('createTag', name);
  }
}
export default TagHelper;