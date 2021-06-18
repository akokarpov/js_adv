export default Vue.component("catalogue", {
    template: `<div v-if="goods.length > 0">
    <h2>Catalogue</h2>
    <div class="goods-list">
      <h3 v-if="filteredGoods.length === 0">This good does not exist in catalogue!</h3>
      <goodsitem v-for="good in filteredGoods" :good="good" v-bind:key="good.product_id"></goodsitem>
    </div>
    </div>`,
    props: ["filteredGoods", "goods"],
  })