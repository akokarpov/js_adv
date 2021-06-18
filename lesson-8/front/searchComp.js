export default Vue.component("search", {
    template: `<input type="text" class="goods-search" v-bind:value="searchLine" v-on:input="$emit('input', $event.target.value)">`,
    props: ["searchLine"],
  });