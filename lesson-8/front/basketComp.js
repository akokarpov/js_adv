export default Vue.component("basketcomp", {
  template: `<div v-if="basket.length > 0">
  <h2>Your cart. Total checkout: {{totalPrice}} &#8381;.</h2>
    <div class="cart">
        <div class="goods-item" v-for="good in basket">
          <img src="https://picsum.photos/110" alt="img">
          <h5>{{good.id_product}}</h5>
          <h3>{{good.product_name}}</h3>
          <p>{{good.price}} &#8381;.</p>
        </div>
    </div>
  </div>`,
  props: ["basket", "totalPrice"],
})