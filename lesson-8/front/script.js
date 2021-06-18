

import { } from "./searchComp";
import { } from "./catalogueComp";
import { } from "./goodsitemComp";
import { } from "./basketComp";
import { } from "./serrorComp";

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