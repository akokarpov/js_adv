const API_URL = "http://localhost:3000";
export default Vue.component("goodsitem", {
  template: `<div class="goods-item">
  <img src="https://picsum.photos/110" alt="img">
  <h5>{{good.id_product}}</h5>
  <h3>{{good.product_name}}</h3>
  <p>{{good.price}} &#8381;.</p>
  <button class="item-button-add" type="button" @click="addToBasket">&#43;</button>
  <button class="item-button-rem" type="button" @click="removeFromBasket">&mdash;</button>
  </div>`,
  props: ["good"],
  methods: {

    async addToBasket() {

      await fetch(`${API_URL}/addToBasket`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(this.good)
      });

      this.$root.fetchBasket();

    },

    async removeFromBasket() {

      await fetch(`${API_URL}/remFromBasket`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(this.good)
      });

      this.$root.fetchBasket();

    },

  },

})