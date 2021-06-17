
Vue.component("search", {
  template: `<input type="text" class="goods-search" v-bind:value="searchLine" v-on:input="$emit('input', $event.target.value)">`,
  props: ["searchLine"],
})

Vue.component("catalogue", {
  template: `<div v-if="goods.length > 0">
  <h2>Catalogue</h2>
  <div class="goods-list">
    <h3 v-if="filteredGoods.length === 0">Nothing is found in the catalogue!</h3>
    <div v-if="goods.length > 0" class="goods-item" v-for="good in filteredGoods">
      <img src="https://picsum.photos/110" alt="img">
      <h5>{{good.id_product}}</h5>
      <h3>{{good.product_name}}</h3>
      <p>{{good.price}} &#8381;.</p>
      <button class="item-button-add" type="button" @click="addToBasket">&#43;</button>
      <button class="item-button-rem" type="button" @click="removeFromBasket">&mdash;</button>
    </div>
  </div>
  </div>`,
  props: ["filteredGoods", "goods", "addToBasket", "removeFromBasket"],
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
    <h3>⛔ Server data! Try to access this page later. ⛔</h3>
    </div>
  </div>`,
  props: ["goods"],
})

const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

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
      const response = await fetch(`${API_URL}/catalogData.json`);
      if (response.ok) {
        this.goods = await response.json();
        this.filteredGoods = this.goods;
      }
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

    addToBasket(e) {
      const addedGoodId = Number(e.path[1].childNodes[2].textContent)
      this.goods.forEach(good => {
        if (good.id_product === addedGoodId) {
          this.basket.push(good);
        }
      })
      this.updatePrice();
      console.log(this.basket);
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
  },

});

document.querySelector(".search-button").addEventListener("click", app.filterGoods);