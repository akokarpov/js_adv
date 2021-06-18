export default Vue.component("serror", {
  template: `<div v-if="goods.length === 0">
  <div class="goods-list">
    <h3>⛔ Server data error! Try to access this page later! ⛔</h3>
    </div>
  </div>`,
  props: ["goods"],
})