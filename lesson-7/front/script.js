


Vue.component("search", {
  template: `<input type="text" class="goods-search" v-bind:value="searchLine" v-on:input="$emit('input', $event.target.value)">`,
  props: ["searchLine"],
})

Vue.component("catalogue", {
  template: `<div v-if="goods.length > 0">
  <h2>Catalogue</h2>
  <div class="goods-list">
    <h3 v-if="filteredGoods.length === 0">This good does not exist in catalogue!</h3>
    <goodsitem v-for="good in filteredGoods" :good="good" v-bind:key="good.product_id"></goodsitem>
  </div>
  </div>`,
  props: ["filteredGoods", "goods"],
})

Vue.component("goodsitem", {
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

      app.fetchBasket();

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

      app.fetchBasket();

    },

  },

})

Vue.component("basketcomp", {
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

Vue.component("serror", {
  template: `<div v-if="goods.length === 0">
  <div class="goods-list">
    <h3>⛔ Server data error! Try to access this page later. ⛔</h3>
    </div>
  </div>`,
  props: ["goods"],
})

const API_URL = "http://localhost:3000";

const app = new Vue({

  el: "#app",

  data: {
    goods: [],
    filteredGoods: [],
    searchLine: "",
    basket: [],
    totalPrice: 0,
  },

  methods: {

    async fetchGoods() {
      const response = await fetch(`${API_URL}/catalogData`);
      if (response.ok) {
        this.goods = await response.json();
        this.filteredGoods = this.goods;
      }
    },

    async fetchBasket() {
      const response = await fetch(`${API_URL}/cartData`);
      if (response.ok) {
        this.basket = await response.json();
      }
      this.updatePrice();
    },

    filterGoods() {
      this.filteredGoods = [];
      this.goods.forEach(good => {

        if (this.searchLine.toLowerCase() === good.product_name.toLowerCase()) {
          this.filteredGoods.push(good);

        } else if (this.searchLine === "") {
          this.filteredGoods = this.goods;
        }

      });
    },

    removeFromBasket(e) {
      const removedGoodId = Number(e.path[1].childNodes[2].textContent)
      for (good of this.basket) {
        if (good.id_product === removedGoodId) {
          const i = this.basket.indexOf(good);
          this.basket.splice(i, 1);
          this.updatePrice();
          break;
        }
      }
      console.log(this.basket);
    },

    updatePrice() {
      this.totalPrice = 0;
      this.basket.forEach(good => { this.totalPrice += good.price; });
    }

  },

  mounted() {
    this.fetchGoods();
    this.fetchBasket();
  },

});

document.querySelector(".search-button").addEventListener("click", app.filterGoods);