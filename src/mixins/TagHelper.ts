
import Vue from 'vue'
import Component from 'vue-class-component'
const map: {[key: string]: string}={
  'tag name duplicated':'tag name duplicated'
}

@Component
export class TagHelper extends Vue {
  createTag() {
    const name = window.prompt('please enter your Tags name');
    if (!name) {return window.alert('Tags cannot be null');}
    this.$store.commit('createTag', name);
    if(this.$store.state.createTagError){
      window.alert(map[this.$store.state.createTagError.message] || 'Unknown Error');
    }
  }
}
export default TagHelper;